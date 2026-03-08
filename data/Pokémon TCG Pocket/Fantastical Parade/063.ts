import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts"
	},

	illustrator: "mingo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It is highly attuned to the emotions of people\nand Pokémon. It hides if it senses hostility."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Confuse Ray"
		},

		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card