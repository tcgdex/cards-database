import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
    name: {
        fr: "Évoli",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Shibuzoh.",

    set: Set,
    dexId: [133],
    hp: 60,
    types: ["Colorless"],

    stage: "Basic",
    retreat: 2,

    weaknesses: [
        {
            type: "Fighting",
            value: "×2"
        }
    ],

    abilities: [
        {
            type: "Ability",
            name: {
                fr: "Évolution de l'Énergie"
            },
            effect: {
                fr: "Lorsque vous attachez pendant votre tour une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte qui est l'évolution de ce Pokémon et du même type que cette carte Énergie. Mettez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck."
            }
        }
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Pioche Rapide"
            },
            effect: {
                fr: "Lancez une pièce. Si c'est face, piochez une carte."
            }
        }
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 362808,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 362808,
            }
        }
    ]
}

export default card

