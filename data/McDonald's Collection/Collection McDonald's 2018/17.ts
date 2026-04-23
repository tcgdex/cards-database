import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Pikachu",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Saya Tsuruta",

    set: Set,
    dexId: [25],
    hp: 60,
    types: ["Lightning"],

    stage: "Basic",
    retreat: 1,

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
        },
    ],

    attacks: [
        {
			cost: ["Colorless"],
            name: {
                fr: "Queue Battoir"
            },
            damage: 10
        },
        {
			cost: ["Lightning", "Colorless"],
            name: {
                fr: "Éclair"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            },
            damage: 20
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362788,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362788,
            }
        }
    ]
}

export default card

