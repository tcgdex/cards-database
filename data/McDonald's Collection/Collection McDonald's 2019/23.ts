import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Magnéti",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "MAHOU",

    set: Set,
    dexId: [81],
    hp: 60,
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

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Aimant Inquisiteur"
            },
            effect: {
                fr: "Cherchez jusqu'à 3 cartes Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
            }
        },
        {
            cost: ["Lightning"],
            name: {
                fr: "Charge"
            },
            damage: 10,
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479784,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581867,
            }
        }
    ]
}

export default card

