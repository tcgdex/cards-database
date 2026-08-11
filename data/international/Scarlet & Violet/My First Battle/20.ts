import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'en-us': "Magneton",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Magnemite",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
		},

		damage: 20
		}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Magnetic Circle",
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched lightning Pokémon",
		},

		damage: "20+"
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742003,
				tcgplayer: 524064
			}
		},
	],

	illustrator: "GOSSAN",
}

export default card