import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [280],

	name: {
		'en-us': "Ralts"
	},

	illustrator: "mingo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "It is highly attuned to the emotions of people\nand Pokémon. It hides if it senses hostility."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Confuse Ray"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card