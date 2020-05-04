import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 506,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/108/high",
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
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
