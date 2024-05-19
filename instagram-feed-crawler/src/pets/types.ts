/**
 * Describe a Pet information.
 */
export interface PetInformation {
    /**
     * The animal's name.
     * It can be omitted if is unknown.
     */
    name?: string;

    /**
     * The animal's species.
     * It can be omitted if is unknown.
     */
    species?: 'cat' | 'dog' | 'horse' | 'bird' | 'cow' | 'pig' | 'rat' | 'other';

    /**
     * The animal's sex.
     * It can be omitted if is unknown.
     */
    sex?: 'male' | 'female';

    /**
     * If the animal was neutered.
     * It can be omitted if is unknown.
     */
    isNeutered?: boolean;

    /**
     * The animal's age group.
     * It can be omitted if is unknown.
     */
    ageGroup?: 'young' | 'adult' | 'senior';

    /**
     * The animal's possible breeds.
     * The value must be in Portuguese Brazil.
     * It can be an empty array if is unknown.
     */
    possibleBreeds: string[];

    /**
     * The animal's colors. What is the animal's coat coloring? It can be a list of colors.
     * The value must be in Portuguese Brazil.
     * It can be an empty array if is unknown.
     */
    colors: ('Marrom' | 'Caramelo' | 'Preto' | 'Branco' | 'Cinza' | 'Laranja' | 'Tigrado' | 'Chocolate' | 'Bege' | 'Vermelho' | 'Amarelo' | 'Dourado')[];

    /**
     * The animal's size.
     * `'P'` for Small; `'M'` for Medium and `'G'` for Big.
     * It can be omitted if is unknown.
     */
    size?: 'P' | 'M' | 'G';

    /**
     * The original location where the animal was found before or rescued from.
     * It can be an empty object if is unknown.
     */
    originalLocation: Location;

    /**
     * The animal's current location. Where is located the animal?
     * It can be an empty object if is unknown or if the animal is lost.
     */
    currentLocation: LocationWithShelter;

    /**
     * The color of the animal's eyes. Note that the animal can have heterochromia, when it has more than one eye color.
     * The value must be in Portuguese Brazil.
     * It can be an empty array if is unknown.
     */
    eyeColors?: ('Marrom' | 'Preto' | 'Azul' | 'Amarelo' | 'Verde' | 'Laranja' | 'Cinza')[];

    /**
     * The animal's state.
     * It can be `'SEARCHING_OWNER'` if the animal is rescued and people are searching for its owner;
     * Or 'SEARCHING_PET' if the animal is lost, and its owner is searching for it.
     * It can be omitted if is unknown.
     */
    state?: 'SEARCHING_OWNER' | 'SEARCHING_PET';


    /**
     * If the animal was already rescued.
     * It can be omitted if is unknown.
     */
    isRescued?: boolean;

    /**
     * If the animal is in a temporary home.
     * It can be omitted if is unknown.
     */
    isInTemporaryHome?: boolean;

    /**
     * Any distinguishing features of the animal: mutilations; color marks, drawings (eg: "cat with 'batman' face") or stains in its coat; if it has long hair or short hair; etc.
     * The value must be in Portuguese Brazil.
     * It can be an empty array if is unknown.
     */
    distinguishingFeatures: string[],

    /**
     * The contact information described.
     */
    contact: {
        /**
         * Contact's name. It can be omitted if is unknown.
         */
        name?: string;

        /**
         * Contact's phone. It can be omitted if is unknown.
         */
        phone?: string;

        /**
         * Contact's email. It can be omitted if is unknown.
         */
        email?: string;

        /**
         * Contact's instagram user. It can be omitted if is unknown.
         */
        instagram?: string;
    };
}

interface Location {
    /**
     * Location's city. It can be omitted if is unknown.
     */
    city?: string;

    /**
     * Location's neighborhood. It can be omitted if is unknown.
     */
    neighborhood?: string;

    /**
     * Full location description as it was described.
     * It can be omitted if is not described or unknown.
     */
    fullLocation?: string;
}

interface LocationWithShelter extends Location {
    /**
     * The shelter name where the animal is located.
     * It can be omitted if is unknown.
     */
    shelterName?: string;
}

export interface PetInformationError {
    error: 'no_animal' | 'multiple_animals' | 'no_description' | 'invalid_response';
    detail?: any;
}

export interface PetBaseMetadata {
    id?: string;
    crawledInformation: PetInformation | PetInformationError;
    dataState: 'TO_VERIFY' | 'VERIFIED';
    pictureUrl?: string;
    controlId?: string;
    description?: string;
    instagramPostId: string;
    instagramPostUrl: string;
    instagramAccount: string;
}

export interface PetUnverifiedMetadata extends PetBaseMetadata {
    crawledInformation: PetInformation | PetInformationError;
    information?: PetInformation;
    dataState: 'TO_VERIFY';
}

export interface PetVerifiedMetadata extends PetBaseMetadata {
    crawledInformation: PetInformation | PetInformationError;
    information: PetInformation;
    dataState: 'VERIFIED';
}

export type PetMetadata = PetUnverifiedMetadata | PetVerifiedMetadata;
