import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
    name: {
        fr: "Raichu d'Alola",
    },

    rarity: "None",
    category: "Pokemon",
    illustrator: "Akira Komayama",

    set: Set,
    dexId: [26],
    hp: 110,
    types: ["Lightning"],

	evolveFrom: {
		fr: "Pikachu"
	},
    stage: "Stage1",
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

    abilities: [
        {
            type: "Ability",
            name: {
                fr: "Surf Caudal"
            },
            effect: {
                fr: "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite."
            }
        }
    ],

    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                fr: "Psyko"
            },
            damage: 70,
            effect: {
                fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire."
            }
        },
    ],

    variants: [
        {
            type: 'normal',
            thirdParty: {
                cardmarket: 479774,
            }
        },
        {
            type: 'holo',
            thirdParty: {
                cardmarket: 581865,
            }
        }
    ]
}

export default card

