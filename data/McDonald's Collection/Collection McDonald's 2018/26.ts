import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Tiboudet",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kouki Saitou",

    set: Set,
    dexId: [749],
    hp: 80,
    types: ["Fighting"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Grass",
            value: "×2"
        },
    ],

    attacks: [
        {
			cost: ["Fighting", "Fighting"],
            name: {
                fr: "Double Pied"
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
                cardmarket: 362797,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362797,
            }
        }
    ]
}

export default card

