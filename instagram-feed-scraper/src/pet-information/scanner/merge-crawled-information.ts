import { PetInformation, PetMetadata } from '../types';

type MergeCrawledInformationArgs = {
  petMetadata: PetMetadata;
  imageBasedInformation: PetInformation;
  descriptionBasedInformation: PetInformation;
}

export class MergeCrawledInformationScanner {
  mergeCrawledInformation ({descriptionBasedInformation, imageBasedInformation, petMetadata}: MergeCrawledInformationArgs): PetMetadata {

    const petInformation: PetInformation = {
        name: descriptionBasedInformation?.name || imageBasedInformation?.name,
        species: descriptionBasedInformation?.species || imageBasedInformation?.species,
        sex: descriptionBasedInformation?.sex || imageBasedInformation?.sex,
        ageGroup: descriptionBasedInformation?.ageGroup || imageBasedInformation?.ageGroup,
        possibleBreeds: descriptionBasedInformation?.possibleBreeds || imageBasedInformation?.possibleBreeds,
        colors:  imageBasedInformation?.colors?.length ? imageBasedInformation?.colors : descriptionBasedInformation?.colors,
        size: descriptionBasedInformation?.size || imageBasedInformation?.size,
        originalLocation: descriptionBasedInformation?.originalLocation || imageBasedInformation?.originalLocation,
        currentLocation: descriptionBasedInformation?.currentLocation || imageBasedInformation?.currentLocation,
        eyeColors: imageBasedInformation?.eyeColors?.length ? imageBasedInformation?.eyeColors : descriptionBasedInformation?.eyeColors,
        state: descriptionBasedInformation?.state || imageBasedInformation?.state,
        isRescued: descriptionBasedInformation?.isRescued || imageBasedInformation?.isRescued,
        isInTemporaryHome: descriptionBasedInformation?.isInTemporaryHome || imageBasedInformation?.isInTemporaryHome,
        contact: {
        phone: descriptionBasedInformation?.contact?.phone || imageBasedInformation?.contact?.phone,
          email: descriptionBasedInformation?.contact?.email || imageBasedInformation?.contact?.email,
          instagram:  descriptionBasedInformation?.contact?.instagram || imageBasedInformation?.contact?.instagram,
      }
    }

    return {
      ...petMetadata,
      crawledInformationImage: imageBasedInformation,
      crawledInformationDescription: descriptionBasedInformation,
      information: petInformation, // Por momento, assumi que o information vai ser a informação do crawler, enquanto não temos Data Quality?.
    }
  }
}