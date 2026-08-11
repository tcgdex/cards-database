import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Férosinge",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Miki Tanaka",

    set: Set,
    dexId: [56],
    hp: 60,
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
                fr: "Attaque en Trois Étapes"
            },
            damage: "10×",
            effect: {
                fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479809,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581874,
            }
        }
    ]
}

export default card

