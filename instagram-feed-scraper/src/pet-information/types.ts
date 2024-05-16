export interface PetMetadata {
    id?: string;
    controlId?: string;
    dataState: 'TO_VERIFY' | 'VERIFIED';
    crawledInformationImage?: PetInformation;
    crawledInformationDescription?: PetInformation;
    information?: PetInformation;
    pictureUrl?: string;
    instagramPostId?: string;
    instagramPostUrl?: string;
    instagramAccount?: string;
}

export interface PetInformation {
    name?: string;
    species?: string;
    sex?: 'male' | 'female';
    ageGroup?: 'young' | 'adult' | 'senior';
    possibleBreeds: string[];
    colors?: string[];
    size?: 'P' | 'M' | 'G';
    originalLocation?: string;
    currentLocation?: string;
    eyeColors?: string[];
    state?: 'SEARCHING_OWNER' | 'SEARCHING_PET';
    isRescued?: boolean;
    isInTemporaryHome?: boolean;
    contact?: {
        phone?: string;
        email?: string;
        instagram?: string;
    };
}
