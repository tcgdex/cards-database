import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Triopikeur d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Megumi Mizutani",

    set: Set,
    dexId: [51],
    hp: 60,
    types: ["Metal"],

	evolveFrom: {
		fr: "Taupiqueur d'Alola"
	},
    stage: "Stage1",
    retreat: 1,

    weaknesses: [
        {
            type: "Fire",
            value: "×2"
        },
    ],

    resistances: [
        {
            type: "Psychic",
            value: "-20"
        },
    ],

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                fr: "Ruée Vers l'Or"
            },
            damage: "30×",
            effect: {
                fr: "Défaussez autant de cartes Énergie Metal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479844,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581884,
            }
        }
    ]
}

export default card

