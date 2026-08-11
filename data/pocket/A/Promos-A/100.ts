import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [461],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sneasel"
	},

	description: {
		'en-us': "Evolution made it even more devious.\nIt communicates by clawing signs in boulders."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 0
}

export default card