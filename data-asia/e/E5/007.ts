import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
    set: Set,
    name: {
        ja: "ニドランf",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [29],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "毒物",
            },
            effect: {
                ja: "防御ポケモンは現在中毒になっています。",
            },
            damage: 10,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
        },
        {
            type: "normal",
            stamps: ["1st Edition"],
        },
    ],
};
