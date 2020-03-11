import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-39",
	localId: 39,

	// Card informations
	name: {
		en: "Barboach",
		fr: "Barloche",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 339,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
