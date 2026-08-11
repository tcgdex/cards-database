import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Fire Energy",
	},

	rarity: "None",
    category: "Energy",
    energyType: "Normal",

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741998,
				tcgplayer: 524039
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["charmander", "pokeball"],

			thirdParty: {
				cardmarket: 741997,
				tcgplayer: 532087
			}
		},
	],
}

export default card