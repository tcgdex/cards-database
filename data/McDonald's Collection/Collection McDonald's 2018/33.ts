import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Mucuscule",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Asako Ito",

    set: Set,
    dexId: [704],
    hp: 50,
    types: ["Dragon"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Fairy",
            value: "×2"
        }
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Écume"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            }
        },
        {
            cost: ["Water", "Fairy"],
            name: {
                fr: "Charge"
            },
            damage: 20
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362804,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362804,
            }
        }
    ]
}

export default card

