import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Cornèbre",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Sekio",

    set: Set,
    dexId: [198],
    hp: 70,
    types: ["Darkness"],

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
			cost: ["Darkness"],
            name: {
                fr: "Cyclone"
            },
            effect: {
                fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
            },
            damage: 10
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362798,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362798,
            }
        }
    ]
}

export default card

