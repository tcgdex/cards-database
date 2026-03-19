import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "Magmar dispatches its prey with fire. But it\nregrets this habit once it realizes that it has\nburned its intended prey to a charred crisp."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stoke"
		},

		cost: ["Fire"],

		effect: {
			en: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card