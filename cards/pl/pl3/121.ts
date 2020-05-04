import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-121",
	localId: 121,

	// Card informations
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/121/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/121/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'face",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
