import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonlee"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This amazing Pokémon has an awesome sense of\nbalance. It can kick in succession from any position."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stretch Kick"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card