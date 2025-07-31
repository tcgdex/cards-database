import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Teddiursa"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Honey Snack"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card