import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Taupiqueur d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Megumi Mizutani",

    set: Set,
    dexId: [50],
    hp: 50,
    types: ["Metal"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Fire",
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
                fr: "Spéléologue"
            },
            damage: 0,
            effect: {
                fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix."
            }
        },
        {
            cost: ["Metal"],
            name: {
                fr: "Coud'Boue"
            },
            damage: 10,
        },
    ],

    variants: [
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 479839,
            }
        }
    ]
}

export default card

