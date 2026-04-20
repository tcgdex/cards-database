import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Tarsal",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Yumi",

    set: Set,
    dexId: [280],
    hp: 60,
    types: ["Fairy"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Metal",
            value: "×2"
        }
    ],

    resistances: [
        {
            type: "Darkness",
            value: "-20"
        }
    ],

    attacks: [
        {
            cost: ["Fairy"],
            name: {
                fr: "Vampibaiser"
            },
            effect: {
                fr: "Soignez 10 dégâts à ce Pokémon."
            },
            damage: 10
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362802,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362802,
            }
        }
    ]
}

export default card

