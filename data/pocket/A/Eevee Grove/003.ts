import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [761],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Its sweat is sweet, like syrup made from boiled-down\nfruit. Because of this, Bounsweet was highly valued in\nthe past, when sweeteners were scarce.",
		'fr-fr': "Sa sueur est aussi sucrée qu'un jus de fruits. Elle était donc très appréciée autrefois, quand les édulcorants étaient rares."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flop",
			'fr-fr': "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card