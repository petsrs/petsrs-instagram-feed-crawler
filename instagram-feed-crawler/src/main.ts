import process from 'node:process';
import OpenAI from 'openai';
import { PrismaClient } from '@prisma/client';

import { InstagramService } from './instagram/service';
import { InstagramPost } from './instagram/types';
import { ImageBasedPetInformationScanner } from './pets/infra/scanner/image-based';
import { DescriptionBasedPetInformationScanner } from './pets/infra/scanner/description-based';
import { PetsRepository } from './pets/infra/pet-prisma-repository';
import { PetsService } from './pets/service';
import { PetInformation } from './pets/types';

async function main() {
    // DI Setup
    const prismaClient = new PrismaClient();
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const instagramService = new InstagramService();
    const imageBasedPetInformationScanner = new ImageBasedPetInformationScanner(openai);
    const descriptionBasedPetInformationScanner = new DescriptionBasedPetInformationScanner(openai);
    const petsRepository = new PetsRepository(prismaClient);
    const petService = new PetsService();

    // Business Logic
    const iterator = instagramService.getPostsFromUser('animaisperdidossaoleo');

    let postIteratorResult: IteratorResult<InstagramPost, any>;
    do {
        postIteratorResult = iterator.next();

        // Se o Post possui foto.
        if (postIteratorResult && postIteratorResult.value && postIteratorResult.value.display_url) {

            const petMetadata = petService.createMetadataFromPost(postIteratorResult.value);
            const foundExistingPetMetadata = await petsRepository.findByInstagramPostId(petMetadata.instagramPostId);
            if (foundExistingPetMetadata?.id) continue;

            let petInformationFromImage = await imageBasedPetInformationScanner.scanInformation(postIteratorResult.value);
            if (petInformationFromImage['error']) {
                console.warn('main:warn', `Image analysing error: https://instagram.com/p/${postIteratorResult.value.shortcode}. Skipping.`, petInformationFromImage);
                continue;
            }

            let petInformationFromDescription = await descriptionBasedPetInformationScanner.scanInformation(postIteratorResult.value);
            if (petInformationFromDescription['error']) {
                console.warn('main:warn', `Description analysing error: https://instagram.com/p/${postIteratorResult.value.shortcode}.`, petInformationFromDescription);
            }

            petMetadata.crawledInformation = petService.mergeCrawledInformation(petInformationFromImage as PetInformation, petInformationFromDescription);

            await petsRepository.create(petMetadata);
        }
    } while (!postIteratorResult.done);

}

main();



