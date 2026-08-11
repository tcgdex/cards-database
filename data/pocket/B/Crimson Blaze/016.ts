import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [229],

	name: {
		'en-us': "Houndoom"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Houndour"
	},

	description: {
		'en-us': "Upon hearing its eerie howls, other Pokémon get\nthe shivers and head straight back to their nests."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sharp Fang"
		},

		damage: 50,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card