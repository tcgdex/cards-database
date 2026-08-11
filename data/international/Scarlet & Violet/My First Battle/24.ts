import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lightning Energy",
	},

	rarity: "None",
    category: "Energy",
    energyType: "Normal",

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742010,
				tcgplayer: 524040
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["pikachu", "pokeball"],

			thirdParty: {
				cardmarket: 742009,
				tcgplayer: 532090
			}
		},
	],
}

export default card