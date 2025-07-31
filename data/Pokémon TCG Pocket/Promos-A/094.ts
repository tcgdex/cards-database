import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Horsea"
	},

	illustrator: "Taira Akitsu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Arrow"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 10 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card