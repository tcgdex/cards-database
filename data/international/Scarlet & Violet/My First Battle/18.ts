import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Pikachu",
	},	
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electro Ball",
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Thunder",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742001,
				tcgplayer: 524062
			}
		},
	],

	illustrator: "Kariya",
}

export default card