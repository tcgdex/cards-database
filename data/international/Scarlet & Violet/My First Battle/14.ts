import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Growlithe",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Flare Blitz",
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage",
		},

		damage: "90+"
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741993,
				tcgplayer: 524094
			}
		},
	],

	illustrator: "nisimana",
}

export default card