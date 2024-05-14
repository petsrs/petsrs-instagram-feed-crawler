import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';

import { InstagramPost } from './types';

const INSTALOADER_OUTPUT_FOLDER = `${homedir()}/instaloader-output`;

export class InstagramService {
    *getPostsFromUser(username: string): Iterator<InstagramPost | undefined> {
        const result = spawnSync(
            'instaloader', [
                username,
                '--no-pictures',
                '--no-videos',
                '--no-compress-json',
                '--no-captions',
                '--no-profile-pic',
                '--login', 'barbaraovski',
                '--password', 'localizapets@2024'
            ],
            { cwd: INSTALOADER_OUTPUT_FOLDER }
        );
        console.log(result, result.stdout?.toString(), result.stderr?.toString());
        const postsPath = readdirSync(`${INSTALOADER_OUTPUT_FOLDER}/${username}`);
        for (const postPath of postsPath) {
            try {
                const fileContent = readFileSync(`${INSTALOADER_OUTPUT_FOLDER}/${username}/${postPath}`, 'utf-8');
                const instaloaderOutput = JSON.parse(fileContent);
                if (instaloaderOutput.node)
                    yield instaloaderOutput.node;
            } catch (error) {
                yield undefined;
            }
        }
    }
}
