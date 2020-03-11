import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-41",
	localId: 41,

	// Card informations
	name: {
		en: "Snover",
		fr: "Blizzi",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "otumami",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
