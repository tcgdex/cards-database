import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [570],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It changes into the forms of others to surprise\nthem. Apparently, it often transforms into a\nsilent child.",
		'fr-fr': "Il prend l'apparence des autres afin de les surprendre. On dit qu'il se transforme souvent en petit enfant silencieux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card