import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/121/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/121/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/121/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



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

