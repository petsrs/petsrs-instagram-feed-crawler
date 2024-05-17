import OpenAI from 'openai';

import { InstagramPost } from '../../../instagram/types';
import { PetInformation, PetInformationError } from '../../types';
import { DESCRIPTION_PROMPT_TEXT } from './constants';

export class DescriptionBasedPetInformationScanner {
    constructor(
        private readonly openai: OpenAI
    ) {}

    async scanInformation(post: InstagramPost): Promise<PetInformation | PetInformationError> {
        if (!post.edge_media_to_caption?.edges?.length) {
            return {
                error: 'no_description',
            };
        }
        const result = await this.openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: [
                        { type: 'text', text: post.edge_media_to_caption.edges[0].node.text + '\n\n' + DESCRIPTION_PROMPT_TEXT },
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
