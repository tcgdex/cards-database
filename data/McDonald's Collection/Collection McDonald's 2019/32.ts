import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Miaouss d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Akira Komayama",

    set: Set,
    dexId: [52],
    hp: 60,
    types: ["Darkness"],

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
            type: "Psychic",
            value: "-20"
        }
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Plaisir Gâché"
            },
            damage: "10+",
            effect: {
                fr: "Si vous jouez en second, cette attaque inflige 60 dégâts supplémentaires pendant votre premier tour."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479829,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581882,
            }
        }
    ]
}

export default card

