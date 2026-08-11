import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [339],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "Its two whiskers provide a sensitive radar. Even in\nmuddy waters, it can detect its prey's location.",
		'fr-fr': "Il se sert de ses barbillons comme d'un radar ultrasophistiqué. Ils lui permettent de détecter ses proies même dans l'eau boueuse."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card