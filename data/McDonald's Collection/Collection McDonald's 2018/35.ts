import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Miaouss",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kagemaru Himeno",

    set: Set,
    dexId: [52],
    hp: 60,
    types: ["Colorless"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Fighting",
            value: "×2"
        }
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Bluff"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            },
            damage: 10
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362806,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362806,
            }
        }
    ]
}

export default card

