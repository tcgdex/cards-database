import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Rhinocorne",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "miki kudo",

    set: Set,
    dexId: [111],
    hp: 80,
    types: ["Fighting"],

    stage: "Basic",
    retreat: 3,

    weaknesses: [
        {
            type: "Grass",
            value: "×2"
        },
    ],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Allonger"
            },
            damage: 20,
        },
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                fr: "Empal'Korne"
            },
            damage: 60,
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479824,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581880,
            }
        }
    ]
}

export default card

