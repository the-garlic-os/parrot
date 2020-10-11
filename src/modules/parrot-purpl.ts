import { ParrotError } from "./parrot-error";

// Importing returns undefined 🤷‍♂️
const MarkovChain = require("purpl-markov-chain");

export class ParrotPurpl extends MarkovChain {
    // We have to expect to try multiple times to get valid output
    //   from .generate() because sometimes it returns an empty
    //   string.
    generate(): string {
        for (let i = 0; i < 1000; ++i) {
            const sentence = super.generate();
            if (sentence) {
                return sentence;
            }
        }
        throw new ParrotError({
            // The Markov Chain "drew a blank". Try as it might,
            //   for some reason it just couldn't come up with
            //   anything to say.
            name: "Drew a blank",
            code: "DREWBLANK",
            message: "Failed to generate a sentence after 1000 attempts",
        });
    }
}
