import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "When the memory of its departed mother brings\nit to tears, its cries echo mournfully within the\nskull it wears on its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card