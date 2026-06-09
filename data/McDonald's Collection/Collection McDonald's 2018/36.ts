import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Leveinard",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Megumi Mizutani",

    set: Set,
    dexId: [113],
    hp: 110,
    types: ["Colorless"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fighting",
            value: "×2"
        }
    ],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Blessure Pansée"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts à l'un de vos Pokémon."
            }
        },
        {
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            name: {
                fr: "Enfoncement"
            },
            damage: 80
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362807,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362807,
            }
        }
    ]
}

export default card

