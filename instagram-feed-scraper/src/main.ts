import { InstagramService } from "./instagram/service";
import {ImageBasedPetInformationScanner} from "./pet-information/scanner/image-based";
import { DescriptionBasedPetInformationScanner } from './pet-information/scanner/description-based';
import { MergeCrawledInformationScanner } from './pet-information/scanner/merge-crawled-information';
import { PetMetadata } from './pet-information/types';
import { createPetMetadata, getPetMetadataByInstagramPostId } from './pet-information/repository/petMetaDataRepository';
import { skip } from 'rxjs';

async function main() {
    const instagramService = new InstagramService();
    const imageBasedPetInformationScanner = new ImageBasedPetInformationScanner();
    const descriptionBasedPetInformationScanner = new DescriptionBasedPetInformationScanner();
    const mergeInformationScanner = new MergeCrawledInformationScanner();
    const iterator = instagramService.getPostsFromUser("acheseupetesteio");

    let result;
    do {
        result = iterator.next();

        if (result.value && result.value.display_url) {

            const petBaseMetaData: PetMetadata = {
                dataState: 'TO_VERIFY',
                instagramPostUrl: `https://instagram.com/p/${result?.value?.shortcode}`,
                instagramPostId: result?.value?.shortcode,
                instagramAccount: result?.value?.owner?.username,
                pictureUrl: result?.value?.display_resources?.length ? result?.value?.display_resources?.[result?.value?.display_resources?.length - 1]?.src : undefined,
            };

            const foundExistingPetMetadata = await getPetMetadataByInstagramPostId(petBaseMetaData.instagramPostId);

            if (!foundExistingPetMetadata?.id) {
                const chatCompletionMessageFromImage = await imageBasedPetInformationScanner.scanInformation(result.value);
                const chatCompletionMessageFromDescription = await descriptionBasedPetInformationScanner.scanInformation(result.value);
                const mergedInformation = mergeInformationScanner.mergeCrawledInformation({
                    descriptionBasedInformation: chatCompletionMessageFromDescription,
                    imageBasedInformation: chatCompletionMessageFromImage,
                    petMetadata: petBaseMetaData
                });
                await createPetMetadata(mergedInformation);
            }
        }
    } while (!result.done);

}

main();



