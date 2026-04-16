import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Water Energy",
	},

	rarity: "None",
    category: "Energy",
    energyType: "Normal",

	variants: [
		{
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742022,
				tcgplayer: 524041
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["squirtle", "pokeball"],

			thirdParty: {
				cardmarket: 742022,
				tcgplayer: 524041
			}
		},
	],
}

export default card