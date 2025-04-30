import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head."
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