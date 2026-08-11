import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Froussardine",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Sanosuke Sakuma",

    set: Set,
    dexId: [746],
    hp: 30,
    types: ["Water"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Lightning",
            value: "×2"
        },
    ],

    abilities: [
        {
            type: "Ability",
            name: {
                fr: "Banc"
            },
            effect: {
                fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Froussardine-GX dans votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon."
            }
        }
    ],

    attacks: [
        {
			cost: ["Water"],
            name: {
                fr: "Tir de Précision"
            },
            effect: {
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
            }
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362787,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362787,
            }
        }
    ]
}

export default card

