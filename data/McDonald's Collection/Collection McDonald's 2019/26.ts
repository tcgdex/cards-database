import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Électhor",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Hitoshi Ariga",

    set: Set,
    dexId: [145],
    hp: 120,
    types: ["Lightning"],

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
        }
    ],

    attacks: [
        {
            cost: ["Lightning"],
            name: {
                fr: "Éclair"
            },
            damage: 20,
            effect: {
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
            }
        },
        {
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            name: {
                fr: "Bec Vrille"
            },
            damage: 120,
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479799,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581870,
            }
        }
    ]
}

export default card

