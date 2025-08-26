import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ベルスプラウト",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [69],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Grass"],
            name: {
                ja: "つる鞭",
            },
            damage: 10,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
        {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
