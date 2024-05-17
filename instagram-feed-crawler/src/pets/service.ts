import { InstagramPost } from '../instagram/types';
import {PetInformation, PetInformationError, PetUnverifiedMetadata} from './types';

export class PetsService {
    createMetadataFromPost(post: InstagramPost): PetUnverifiedMetadata {
        return {
            dataState: 'TO_VERIFY',
            crawledInformation: null,
            crawledInformationDescription: post.edge_media_to_caption.edges[0].node.text,
            instagramPostId: post.shortcode,
            instagramPostUrl: `https://instagram.com/p/${post.shortcode}`,
            instagramAccount: post.username,
            pictureUrl: post.display_url
        }
    }

    mergeCrawledInformation(petInformationFromImage: PetInformation, petInformationFromDescription: PetInformation | PetInformationError): PetInformation {
        if ((petInformationFromDescription as PetInformationError).error) return petInformationFromImage;
        petInformationFromDescription = petInformationFromDescription as PetInformation;

        return {
            name: petInformationFromDescription.name ?? petInformationFromImage.name,
            species: petInformationFromDescription.species ?? petInformationFromImage.species,
            sex: petInformationFromDescription.sex ?? petInformationFromImage.sex,
            ageGroup: petInformationFromDescription.ageGroup ?? petInformationFromImage.ageGroup,
            possibleBreeds: petInformationFromDescription.possibleBreeds || petInformationFromImage.possibleBreeds || [],
            colors: petInformationFromImage.colors || [],
            size: petInformationFromDescription.size ?? petInformationFromImage.size,
            originalLocation: {
                city: petInformationFromDescription.originalLocation?.city ?? petInformationFromImage.originalLocation?.city,
                neighborhood: petInformationFromDescription.originalLocation?.neighborhood ?? petInformationFromImage.originalLocation?.neighborhood,
                fullLocation: petInformationFromDescription.originalLocation?.fullLocation ?? petInformationFromImage.originalLocation?.fullLocation,
            },
            currentLocation: {
                city: petInformationFromDescription.currentLocation?.city ?? petInformationFromImage.currentLocation?.city,
                neighborhood: petInformationFromDescription.currentLocation?.neighborhood ?? petInformationFromImage.currentLocation?.neighborhood,
                fullLocation: petInformationFromDescription.currentLocation?.fullLocation ?? petInformationFromImage.currentLocation?.fullLocation,
                shelterName: petInformationFromDescription.currentLocation?.shelterName ?? petInformationFromImage.currentLocation?.shelterName,
            },
            eyeColors: petInformationFromDescription.eyeColors || petInformationFromImage.eyeColors || [],
            state: (petInformationFromDescription.state ?? petInformationFromImage.state) || petInformationFromDescription.isRescued ? 'SEARCHING_OWNER' : undefined,
            isRescued: petInformationFromDescription.isRescued ?? petInformationFromImage.isRescued,
            isInTemporaryHome: petInformationFromDescription.isRescued ?? petInformationFromImage.isRescued,
            distinguishingFeatures: [...(petInformationFromDescription.distinguishingFeatures || []), ...(petInformationFromImage.distinguishingFeatures || [])],
            contact: {
                name: petInformationFromDescription.contact?.name ?? petInformationFromImage.contact?.name,
                phone: petInformationFromDescription.contact?.phone ?? petInformationFromImage.contact?.phone,
                email: petInformationFromDescription.contact?.email ?? petInformationFromImage.contact?.email,
                instagram: petInformationFromDescription.contact?.instagram ?? petInformationFromImage.contact?.instagram,
            },
        }
    }
}
