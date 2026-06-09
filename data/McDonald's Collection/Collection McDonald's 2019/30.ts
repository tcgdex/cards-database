import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Osselait",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "sowsow",

    set: Set,
    dexId: [104],
    hp: 60,
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
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Os Pesant"
            },
            damage: 40,
            effect: {
                fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479819,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581878,
            }
        }
    ]
}

export default card

