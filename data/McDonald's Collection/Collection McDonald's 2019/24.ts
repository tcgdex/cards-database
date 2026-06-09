import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Voltorbe",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Ken Sugimori",

    set: Set,
    dexId: [100],
    hp: 50,
    types: ["Lightning"],

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
            type: "Metal",
            value: "-20"
        }
    ],

    abilities: [
        {
            type: "Ability",
            name: {
                fr: "Électrons Flottants"
            },
            effect: {
                fr: "Si de l'Énergie Lightning est attachée à ce Pokémon, il n'a pas de Coût de Retraite."
            }
        }
    ],

    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                fr: "Éclair"
            },
            damage: 20,
            effect: {
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479789,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581868,
            }
        }
    ]
}

export default card

