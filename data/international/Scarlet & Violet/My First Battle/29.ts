import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'en-us': "Magikarp",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Magikarp",
	},
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Splash",
		},

		damage: 10
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742016,
				tcgplayer: 524054
			}
		},
	],

	illustrator: "Amelicart",
}

export default card