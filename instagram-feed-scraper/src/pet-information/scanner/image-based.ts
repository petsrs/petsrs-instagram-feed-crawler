import OpenAI from 'openai';

import { InstagramPost } from '../../instagram/types';
import {PetInformation, PetMetadata} from "../types";
import * as process from "process";

const PROMPT_TEXT = `
Extract information from the following image.
If the image does not contains an animal, return an empty JSON object, nothing more. 

If the image contains an animal, return a JSON object with the following information:
Inform in a JSON object the following information: 
- The animal name (as 'name' string field);
- The animal sex (as 'sex' field. It can be 'male', 'female' or \`null\` if is unknown);
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any. 
- If the animal was neutered (as 'isNeutered' boolean field); 
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any.
- The animal age group (as 'ageGroup' field. It can be  'young', 'adult', 'senior', or \`null\` if is unknown); 
- The animal possible breeds (as ‘possibleBreeds’ array field. Empty array if is unknown);
    - This value must be in Portuguese Brazil;
- The animal colors (as 'colors' string array field); 
    - This value response must be in Portuguese Brazil;
- The animal size (as 'size' field. It can be 'P' for small, 'M' for medium, 'G' for big or \`null\` if is unknown ); 
- The original location where the animal was rescued from or found (as 'originalLocation' string field. \`null\` if is unknown), it could be informed even if the animal is already rescued;
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any. 
- The animal current location (as 'currentLocation' string field. \`null\` if is unknown);
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any. 
- The animal state (as 'state' field. It can be 'SEARCHING_OWNER' if the animal is rescued and people are searching for it's owner; Or 'SEARCHING_PET' if the animal is lost and it’s owner is searching for it. \`null\` if is unknown);  
    - This value response must be in English;
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any.
- The color of the animal's eyes (as 'eyeColors' string array field); 
    - This value response must be in Portuguese Brazil;
- If the animal was already rescued (as ‘isRescued’ boolean field. \`null\` if is unknown);
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any. 
- If the animal is on a temporary home (as ‘isInTemporaryHome’ boolean field. \`null\` if is unknown) and a contact JSON object field with phone, email and instagram account.
    - Do not try to guess. Just inform if this info is described in the image labels, if it contains any. 
- If you are not sure about any of the fields, inform \`null\`.

Return only the json, no other comments and no additional text.
`;

export class ImageBasedPetInformationScanner {
    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    async scanInformation(post: InstagramPost) {
        const result = await this.openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": PROMPT_TEXT},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": post.display_url,
                            },
                        },
                    ],
                }
            ],
            max_tokens: 300,
        });

        const crawledInformation: PetInformation = JSON.parse(result.choices[0].message.content.replace('```json', '').replace('```', ''));

        const pet: PetMetadata = {
            dataState: 'TO_VERIFY',
            crawledInformation,
            instagramPostUrl: `https://instagram.com/p/${post.shortcode}`,
            instagramAccount: post.username,
        };

        console.log(pet);
    }
}
