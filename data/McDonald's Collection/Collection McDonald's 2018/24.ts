import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Riolu",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Saya Tsuruta",

    set: Set,
    dexId: [447],
    hp: 70,
    types: ["Fighting"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Psychic",
            value: "×2"
        },
    ],

    attacks: [
        {
			cost: ["Fighting"],
            name: {
                fr: "Koud'Poing"
            },
            damage: 10
        },
        {
			cost: ["Fighting", "Fighting"],
            name: {
                fr: "Balayage"
            },
            damage: 30
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362795,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362795,
            }
        }
    ]
}

export default card

