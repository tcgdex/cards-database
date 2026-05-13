import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Farfuret",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Hasuno",

    set: Set,
    dexId: [215],
    hp: 70,
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
        },
    ],

    attacks: [
        {
			cost: ["Colorless"],
            name: {
                fr: "Aiguisage"
            },
            effect: {
                fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Tranche de ce Pokémon sont de 80."
            }
        },
        {
			cost: ["Darkness", "Colorless"],
            name: {
                fr: "Tranche"
            },
            damage: 20
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362799,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362799,
            }
        }
    ]
}

export default card

