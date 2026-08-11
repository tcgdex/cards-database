import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		'en-us': "Poliwhirl",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Poliwag",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Wave Splash",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742015,
				tcgplayer: 524053
			}
		},
	],

	illustrator: "Mizue",
}

export default card