import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Taupiqueur d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Naoyo Kimura",

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
        }
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Tête de Fer"
            },
            damage: "10×",
            effect: {
                fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479834,
            }
        },
    ]
}

export default card

