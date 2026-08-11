import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		'en-us': "Magmar",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Magma Punch",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741994,
				tcgplayer: 524097
			}
		},
	],

	illustrator: "Ryuta Fuse",
}

export default card