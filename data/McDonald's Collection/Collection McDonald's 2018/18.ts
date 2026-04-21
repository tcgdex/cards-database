import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Racaillou d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Hitoshi Ariga",

    set: Set,
    dexId: [74],
    hp: 70,
    types: ["Lightning"],

    stage: "Basic",
    retreat: 2,

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
            name: {
                fr: "Poliroche"
            },
            effect: {
                fr: "Pendant votre prochain tour, ce Pokémon n'a pas de Coût de Retraite."
            }
        },
        {
			cost: ["Lightning", "Colorless", "Colorless"],
            name: {
                fr: "Roulade"
            },
            damage: 40
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362789,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362789,
            }
        }
    ]
}

export default card

