import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-121",
	localId: 121,

	// Card informations
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 216,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/121/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/121/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
