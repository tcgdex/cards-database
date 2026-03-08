import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
    set: Set,
    name: {
        ja: "Zubat",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [41],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "自制心",
            },
            effect: {
                ja: "Zubatは麻痺することはできません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "噛む",
            },
            damage: 10,
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
