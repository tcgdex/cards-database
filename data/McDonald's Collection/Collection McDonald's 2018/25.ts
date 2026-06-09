import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Rocabot",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Naoki Saito",

    set: Set,
    dexId: [744],
    hp: 60,
    types: ["Fighting"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Grass",
            value: "×2"
        },
    ],

    attacks: [
        {
			cost: ["Fighting"],
            name: {
                fr: "Coinçage"
            },
            effect: {
                fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
            }
        },
        {
			cost: ["Colorless", "Colorless"],
            name: {
                fr: "Coup Déchaîné"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
            },
            damage: 30
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362796,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362796,
            }
        }
    ]
}

export default card

