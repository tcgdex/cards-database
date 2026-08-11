import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [506],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon is courageous but also cautious.\nIt uses the soft fur covering its face to collect\ninformation about its surroundings.",
		'fr-fr': "Ce Pokémon est courageux, mais prudent. Les poils doux qui recouvrent son visage lui permettent de sonder les alentours."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card