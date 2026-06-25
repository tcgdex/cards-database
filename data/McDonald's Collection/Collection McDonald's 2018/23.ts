import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Makuhita",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Mina Nakai",

    set: Set,
    dexId: [296],
    hp: 80,
    types: ["Fighting"],

    stage: "Basic",
    retreat: 2,

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
                fr: "Attaque Surprise"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
            },
            damage: 20
        },
        {
			cost: ["Fighting", "Colorless"],
            name: {
                fr: "Force"
            },
            damage: 40
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362794,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362794,
            }
        }
    ]
}

export default card

