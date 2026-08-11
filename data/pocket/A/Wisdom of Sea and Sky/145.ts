import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [216],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face.",
		'fr-fr': "Quand il est anxieux, il lèche ses pattes qui sont constamment couvertes de miel, et retrouve le sourire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Honey Snack",
			'fr-fr': "Tartine au Miel"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon."
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