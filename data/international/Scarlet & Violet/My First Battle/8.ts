import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Grass Energy",
	},

	rarity: "None",
    category: "Energy",
    energyType: "Normal",

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741986,
				tcgplayer: 524038
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["bulbasaur", "pokeball"],

			thirdParty: {
				cardmarket: 741985,
				tcgplayer: 532088
			}
		},
	],
}

export default card