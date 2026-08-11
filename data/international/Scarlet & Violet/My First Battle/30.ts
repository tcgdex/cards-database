import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Gyarados",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Magikarp",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Tail Smash",
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
		},

		damage: 90
		}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			'en-us': "Hyper Beam",
		},

		damage: 120
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742017,
				tcgplayer: 524055
			}
		},
	],

	illustrator: "NC Empire",
}

export default card