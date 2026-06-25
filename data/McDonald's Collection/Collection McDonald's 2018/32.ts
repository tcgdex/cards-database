import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Minidraco",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Naoyo Kimura",

    set: Set,
    dexId: [147],
    hp: 60,
    types: ["Dragon"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fairy",
            value: "×2"
        }
    ],

    attacks: [
        {
            cost: ["Grass"],
            name: {
                fr: "Signes d'Évolution"
            },
            effect: {
                fr: "Cherchez un Minidraco, un Draco et un Dracolosse dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
            }
        },
        {
            cost: ["Lightning"],
            name: {
                fr: "Coup de Queue"
            },
            damage: 10
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362803,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362803,
            }
        }
    ]
}

export default card

