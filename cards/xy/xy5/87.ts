import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-87",
	localId: 87,

	// Card informations
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 449,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
