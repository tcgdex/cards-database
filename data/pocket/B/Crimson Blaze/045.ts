import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [88],

	name: {
		'en-us': "Grimer"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'en-us': "Appears in filthy areas. It thrives by sucking up\npolluted sludge that is pumped out of factories."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sludge Bomb"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card