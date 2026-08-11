import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [414],

	name: {
		'en-us': "Mothim"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Burmy"
	},

	description: {
		'en-us': "It flutters around at night and steals honey from\nthe Combee hive."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Cutting Wind"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card