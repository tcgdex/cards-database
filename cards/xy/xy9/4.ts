import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-4",
	localId: 4,

	// Card informations
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
