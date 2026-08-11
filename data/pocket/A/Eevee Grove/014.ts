import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [757],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It taunts its prey and lures them into narrow,\nrocky areas where it then sprays them with toxic\ngas to make them dizzy and take them down.",
		'fr-fr': "Il provoque ses proies afin de les attirer dans d'étroites zones rocheuses, puis il les étourdit avec son gaz toxique avant de les achever."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card