import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Machoc",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kyoko Umemoto",

    set: Set,
    dexId: [66],
    hp: 70,
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
			cost: ["Fighting", "Fighting"],
            name: {
                fr: "Double Baffe"
            },
            effect: {
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
            },
            damage: 30
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362793,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362793,
            }
        }
    ]
}

export default card

