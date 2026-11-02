import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Rondoudou",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Ken Sugimori",

    set: Set,
    dexId: [39],
    hp: 70,
    types: ["Fairy"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Metal",
            value: "×2"
        },
    ],

    resistances: [
        {
            type: "Darkness",
            value: "-20"
        },
    ],

    attacks: [
        {
            cost: ["Fairy"],
            name: {
                fr: "Écras'Face"
            },
            damage: 10,
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                fr: "Berceuse"
            },
            effect: {
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479849,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581886,
            }
        }
    ]
}

export default card

