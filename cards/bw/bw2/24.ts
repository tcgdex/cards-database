import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-24",
	localId: 24,

	// Card informations
	name: {
		en: "Basculin",
		fr: "Bargantua",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 550,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/24/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/24/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on this Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Final Gambit",
			fr: "Tout ou Rien",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this Pokémon does 80 damage to itself.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, ce Pokémon s'inflige 80 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
