import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Onix",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Mitsuhiro Arita",

    set: Set,
    dexId: [95],
    hp: 100,
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
            cost: ["Colorless"],
            name: {
                fr: "Grincement"
            },
            effect: {
                fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance)."
            }
        },
        {
            cost: ["Fighting", "Fighting"],
            name: {
                fr: "Frénésie"
            },
            damage: "10+",
            effect: {
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479814,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581876,
            }
        }
    ]
}

export default card

