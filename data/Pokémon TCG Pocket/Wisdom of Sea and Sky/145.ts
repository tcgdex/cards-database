import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Teddiursa",
		fr: "Teddiursa"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face.",
		fr: "Quand il est anxieux, il lèche ses pattes qui sont constamment couvertes de miel, et retrouve le sourire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Honey Snack",
			fr: "Tartine au Miel"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card