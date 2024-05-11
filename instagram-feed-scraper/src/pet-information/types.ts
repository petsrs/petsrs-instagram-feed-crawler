export interface PetMetadata {
    id?: string;
    controlId?: string;
    dataState: 'TO_VERIFY' | 'VERIFIED';
    crawledInformation?: PetInformation;
    information?: PetInformation;
    instagramPostUrl?: string;
    instagramAccount?: string;
}

export interface PetInformation {
    name?: string;
    sex?: 'male' | 'female';
    ageGroup?: 'young' | 'adult' | 'senior';
    possibleBreeds: string[];
    colors?: string[];
    size?: 'P' | 'M' | 'G';
    // @TODO: Expandir objeto
    originalLocation?: string;
    // @TODO: Expandir objeto
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
