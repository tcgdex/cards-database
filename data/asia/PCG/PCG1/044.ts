import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "slowpoke",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [79],
    hp: 50,
    types: ["Psychic"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "混乱波",
            },
            effect: {
                ja: "SlowPokeと防御ポケモンの両方が混乱しています。",
            },
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
