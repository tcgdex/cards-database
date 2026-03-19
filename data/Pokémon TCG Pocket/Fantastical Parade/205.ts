import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "Hidden beneath a tangle of vines that grows\nnonstop even if the vines are torn off, this\nPokémon's true appearance remains a mystery."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sleep Powder"
		},

		damage: 20,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card