import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [114],

	name: {
		'en-us': "Tangela"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows\nnonstop even if the vines are torn off, this\nPokémon's true appearance remains a mystery."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sleep Powder"
		},

		damage: 20,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card