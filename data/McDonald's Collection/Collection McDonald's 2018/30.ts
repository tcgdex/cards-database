import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Mélofée",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Kagemaru Himeno",

    set: Set,
    dexId: [35],
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
                fr: "Gifle"
            },
            damage: 10
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Par Ici"
            },
            effect: {
                fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif."
            }
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362801,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362801,
            }
        }
    ]
}

export default card

