import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "アルカニン",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [59],
    hp: 90,
    types: ["Fire"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Fire"],
            name: {
                ja: "フレア",
            },
            damage: 20,
        },
        {
            cost: ["Fire", "Colorless", "Colorless", "Colorless"],
            name: {
                ja: "ヒートタックル",
            },
            effect: {
                ja: "アルカニンはそれ自体に10のダメージを与えます。",
            },
            damage: 70,
        },
    ],

    retreat: 2,

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
