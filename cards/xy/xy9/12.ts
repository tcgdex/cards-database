import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-12",
	localId: 12,

	// Card informations
	name: {
		en: "Numel",
		fr: "Chamallot",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



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
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
