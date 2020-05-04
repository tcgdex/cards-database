import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-84",
	localId: 84,

	// Card informations
	name: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	hp: 50,

	type: [
		Type.FAIRY,
	],

	dexId: 682,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
