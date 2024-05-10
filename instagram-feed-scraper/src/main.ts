import OpenAI from "openai";
import * as process from "process";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "There is a animal in the image. Inform in a JSON object the following information: The animal type (as 'type' field. can be a 'dog', 'cat', 'bird', 'horse'); The animal colors (as 'colors' array field); Possible breed (as 'possible_breeds' array field); Sex (as 'sex' field. can be 'male', 'female', 'unknown'); Age (as 'age' field. can be a 'baby', 'child', 'adult', 'old', 'unknown' or a number if is present in a label on the image); Note that all information can be found as labels on the image written in Portuguese (Brazil). The image is the following:"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://scontent-den2-1.cdninstagram.com/v/t51.29350-15/436198996_465065475963302_2428459562984177770_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=1fyM6luM69MQ7kNvgFsTH_1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM2NDM4NDU0MDQ5MDI0MzI5MQ%3D%3D.2-ccb7-5&oh=00_AYAuEtbq7qAFX4uOSb71Rc6nbmufZ_3mZiBoXCVQ2MElxg&oe=6643676D&_nc_sid=10d13b",
                    },
                },
            ],
        }
    ],
    max_tokens: 256,
}).then((res) => {
    console.log(res, res.choices[0].message);
});
