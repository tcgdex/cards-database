import { Card } from "models/database/card"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "エネルギーを高めます",
    },

    rarity: "Uncommon",
    category: "Trainer",

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
