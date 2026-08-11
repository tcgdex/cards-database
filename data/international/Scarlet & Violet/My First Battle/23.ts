import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Low Kick",
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Electro Punch",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742006,
				tcgplayer: 524068
			}
		},
	],

	illustrator: "hncl",
}

export default card