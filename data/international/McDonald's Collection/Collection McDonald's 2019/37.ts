import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Excelangue",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Mizue",

    set: Set,
    dexId: [108],
    hp: 100,
    types: ["Colorless"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fighting",
            value: "×2"
        },
    ],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Gobeur"
            },
            effect: {
                fr: "Piochez 3 cartes."
            }
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                fr: "Souplesse"
            },
            damage: "50×",
            effect: {
                fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479859,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581890,
            }
        }
    ]
}

export default card

