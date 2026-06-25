import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Airmure",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Anesaki Dynamic",

    set: Set,
    dexId: [227],
    hp: 110,
    types: ["Metal"],

    stage: "Basic",
    retreat: 1,

    weaknesses: [
        {
            type: "Lightning",
            value: "×2"
        },
    ],

    resistances: [
        {
            type: "Fighting",
            value: "-20"
        },
    ],

    attacks: [
        {
			cost: ["Colorless", "Colorless"],
            name: {
                fr: "Résonance Métallique"
            },
            effect: {
                fr: "Défaussez toute l'Énergie spéciale de chaque Pokémon."
            }
        },
        {
			cost: ["Metal", "Colorless", "Colorless"],
            name: {
                fr: "Aéropique"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
            },
            damage: 60
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362800,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362800,
            }
        }
    ]
}

export default card

