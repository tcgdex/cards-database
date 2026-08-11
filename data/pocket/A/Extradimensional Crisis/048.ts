import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [304],
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "It eats iron ore—and sometimes railroad tracks—\nto build up the steel armor that protects its body.",
		'fr-fr': "Il se nourrit de minerai de fer et parfois même de rails pour se fabriquer une armure d'acier qui protège son corps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card