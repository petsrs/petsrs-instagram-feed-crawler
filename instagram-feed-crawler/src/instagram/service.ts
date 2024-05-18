import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import * as process from "node:process";

import { InstagramPost } from './types';

const INSTALOADER_OUTPUT_FOLDER = `${homedir()}/instaloader-output`;

export class InstagramService {
    *getPostsFromUser(username: string): Iterator<InstagramPost | undefined> {
        this.downloadInstagramAccount(username);

        const userOutputFolder = `${INSTALOADER_OUTPUT_FOLDER}/${username}`;

        if (!existsSync(userOutputFolder)) {
            console.error('instagram-service:err', `${INSTALOADER_OUTPUT_FOLDER}/${username} not found`);
            return undefined;
        }

        const postsPaths = readdirSync(userOutputFolder);
        for (const postPath of postsPaths) {
            try {
                const fileContent = readFileSync(`${userOutputFolder}/${postPath}`, 'utf-8');
                const instaloaderOutput = JSON.parse(fileContent);

                if (instaloaderOutput.node)
                    yield instaloaderOutput.node;
            } catch (error) {
                console.error('instagram-service:err', error.toString());
                yield undefined;
            }
        }
    }

    private downloadInstagramAccount(username: string, loginAttempt: number = 0): void {
        if (!process.env[`INSTALOADER_ACCOUNT_NAME_${loginAttempt}`]) throw new Error(`No more accounts to try. Login attempt: ${loginAttempt}`);

        const result = spawnSync(
            'instaloader', [
                username,
                '--no-pictures',
                '--no-videos',
                '--no-compress-json',
                '--no-captions',
                '--no-profile-pic',
                '--login', process.env[`INSTALOADER_ACCOUNT_NAME_${loginAttempt}`],
                '--password', process.env[`INSTALOADER_ACCOUNT_PASSWORD_${loginAttempt}`]
            ],
            { cwd: INSTALOADER_OUTPUT_FOLDER }
        );

        console.log('instagram-service:instaloader:out', result.stdout.toString());
        const error = result.stderr.toString();
        if (error) {
            console.warn('instagram-service:instaloader:err', error);
            if (error.includes('profile: 400 Bad Request')) {
                console.info('instagram-service', 'Logging with another account...');
                return this.downloadInstagramAccount(username, loginAttempt++);
            }
        }
    }
}
