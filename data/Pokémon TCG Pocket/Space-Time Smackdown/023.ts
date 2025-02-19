import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stoke"
		},

		cost: ["Fire"],

		effect: {
			en: "Take a <span class=\"energy-text energy-text--type-fire\"></span> Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card
