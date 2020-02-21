import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-102",
	localId: 102,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
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
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
