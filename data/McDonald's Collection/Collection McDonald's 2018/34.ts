import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Bébécaille",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "match",

    set: Set,
    dexId: [782],
    hp: 60,
    types: ["Dragon"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fairy",
            value: "×2"
        }
    ],

    abilities: [
        {
            type: "Ability",
            name: {
                fr: "Pare-Balles"
            },
            effect: {
                fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
            }
        }
    ],

    attacks: [
        {
            cost: ["Lightning", "Fighting"],
            name: {
                fr: "Dracogriffe"
            },
            damage: 30
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362805,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362805,
            }
        }
    ]
}

export default card

