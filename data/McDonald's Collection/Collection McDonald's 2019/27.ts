import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Fantominus",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Shibuzoh.",

    set: Set,
    dexId: [92],
    hp: 50,
    types: ["Psychic"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Darkness",
            value: "×2"
        },
    ],

    resistances: [
        {
            type: "Fighting",
            value: "-20"
        }
    ],

    attacks: [
        {
            cost: ["Psychic"],
            name: {
                fr: "Regard Menaçant"
            },
            effect: {
                fr: "Placez un marqueur de dégâts sur l'un des Pokémon de votre adversaire."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479804,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581872,
            }
        }
    ]
}

export default card

