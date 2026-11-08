import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Electrode",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Voltorb",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Speed Attack",
		},

		damage: 40
		}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Single Shot Blast",
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
		},

		damage: 120
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742005,
				tcgplayer: 524066
			}
		},
	],

	illustrator: "miki kudo",
}

export default card