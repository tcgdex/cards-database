import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "森林保護者",
    },

    rarity: "Uncommon",
    category: "Trainer",

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
