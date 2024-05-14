import { InstagramService } from "./instagram/service";
import {ImageBasedPetInformationScanner} from "./pet-information/scanner/image-based";

async function main() {
    const instagramService = new InstagramService();
    const imageBasedPetInformationScanner = new ImageBasedPetInformationScanner();

    const iterator = instagramService.getPostsFromUser("acheseupetesteio");

    let result;
    do {
        result = iterator.next();

        if (result.value && result.value.display_url) {
            const chatCompletionMessage = await imageBasedPetInformationScanner.scanInformation(result.value);
            console.log(chatCompletionMessage);
        }
    } while (!result.done);

}

main();



