import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Élektek",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kouki Saitou",

    set: Set,
    dexId: [125],
    hp: 80,
    types: ["Lightning"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fighting",
            value: "×2"
        },
    ],

    resistances: [
        {
            type: "Metal",
            value: "-20"
        }
    ],

    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                fr: "Balayage"
            },
            damage: 30,
        },
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                fr: "Fatal-Foudre"
            },
            damage: 90,
            effect: {
                fr: "Ce Pokémon s'inflige 30 dégâts."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479794,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581869,
            }
        }
    ]
}

export default card

