import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
    set: Set,
    name: {
        ja: "Koffing",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [109],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "ラム",
            },
            damage: 10,
        },
        {
            cost: ["Grass"],
            name: {
                ja: "混乱ガス",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            stamp: ["1st edition"],
        },
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
