import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-121",
	localId: 121,

	// Card informations
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 739,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/121/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/121/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Jab",
			fr: "Taquet",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Confront",
			fr: "Confrontation",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
