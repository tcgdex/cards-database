import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Vulpix",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Will-O-Wisp",
		},

		damage: 20
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741990,
				tcgplayer: 524087
			}
		},
	],

	illustrator: "Mina Nakai",
}

export default card