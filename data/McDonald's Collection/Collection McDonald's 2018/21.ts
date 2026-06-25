import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Ramoloss",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Mina Nakai",

    set: Set,
    dexId: [79],
    hp: 70,
    types: ["Psychic"],

    stage: "Basic",
    retreat: 3,

    weaknesses: [
        {
            type: "Psychic",
            value: "×2"
        },
    ],

    attacks: [
        {
			cost: ["Colorless"],
            name: {
                fr: "Coup d'Boule"
            },
            damage: 10
        },
        {
			cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                fr: "Charge Bizarre"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
            },
            damage: 60
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362792,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362792,
            }
        }
    ]
}

export default card

