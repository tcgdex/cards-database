import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Togedemaru",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kouki Saitou",

    set: Set,
    dexId: [777],
    hp: 80,
    types: ["Lightning"],

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
            type: "Metal",
            value: "-20"
        },
    ],

    attacks: [
        {
			cost: ["Lightning"],
            name: {
                fr: "Roulade"
            },
            damage: 20
        },
        {
			cost: ["Lightning", "Colorless"],
            name: {
                fr: "Électro Impact"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
            },
            damage: 40
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362791,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362791,
            }
        }
    ]
}

export default card

