import OpenAI from 'openai';

import { InstagramPost } from '../../../instagram/types';
import { PetInformation, PetInformationError } from '../../types';
import { IMAGE_PROMPT_TEXT } from './constants';

export class ImageBasedPetInformationScanner {
    constructor(
        private readonly openai: OpenAI
    ) {
    }

    async scanInformation(post: InstagramPost): Promise<PetInformation | PetInformationError> {
        const result = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: [
                        { type: 'text', text: IMAGE_PROMPT_TEXT },
                        {
                            type: 'image_url',
                            image_url: {
                                url: post.display_url,
                            },
                        },
                    ],
                }
            ],
            max_tokens: 512,
        });

        try {
            return JSON.parse(result.choices[0].message.content.replace('```json', '').replace('```', ''));
        } catch (error) {
            return {
                error: 'invalid_response',
                detail: result.choices[0].message.content
            };
        }
    }
}
