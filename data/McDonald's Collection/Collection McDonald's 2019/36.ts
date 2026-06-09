import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Minidraco",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Ayaka Yoshida",

    set: Set,
    dexId: [147],
    hp: 60,
    types: ["Dragon"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fairy",
            value: "×2"
        },
    ],

    attacks: [
        {
            cost: ["Lightning"],
            name: {
                fr: "Ligotage"
            },
            damage: 10,
            effect: {
                fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479854,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581888,
            }
        }
    ]
}

export default card

