import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-66",
	localId: 66,

	// Card informations
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
