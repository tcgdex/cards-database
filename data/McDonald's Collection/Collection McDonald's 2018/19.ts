import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Loupio",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Ayoka Yoshida",

    set: Set,
    dexId: [170],
    hp: 70,
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
        },
    ],

    attacks: [
        {
			cost: ["Colorless"],
            name: {
                fr: "Sonde Lumineuse"
            },
            effect: {
                fr: "Regardez l'une de vos cartes Récompense (actuellement face cachée)."
            }
        },
        {
			cost: ["Lightning", "Colorless", "Colorless"],
            name: {
                fr: "Boule Élek"
            },
            damage: 30
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362790,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362790,
            }
        }
    ]
}

export default card

