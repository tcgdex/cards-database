import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'en-us': "Ninetales",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Vulpix",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flame Tail",
		},

		damage: 70
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741991,
				tcgplayer: 524091
			}
		},
	],

	illustrator: "Kagemaru Himeno",
}

export default card