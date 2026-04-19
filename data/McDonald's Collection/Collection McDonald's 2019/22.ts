import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Racaillou d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Mitsuhiro Arita",

    set: Set,
    dexId: [74],
    hp: 60,
    types: ["Lightning"],

    stage: "Basic",
    retreat: 2,

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
            name: {
                fr: "Boul'Armure"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire."
            }
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Charge"
            },
            damage: 20,
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479779,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581866,
            }
        }
    ]
}

export default card

