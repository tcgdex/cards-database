import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blacephalon",
		'fr-fr': "Pierroteknik"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [806],
	hp: 100,
	types: ["Fire"],

	description: {
		'en-us': "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
		'fr-fr': "Il s'approche des gens avec son allure désarticulée et fait subitement exploser sa tête. Ce serait une Ultra-Chimère."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat Punk",
			'fr-fr': "Punk Pop"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 70 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 70 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card