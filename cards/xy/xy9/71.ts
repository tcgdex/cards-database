import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-71",
	localId: 71,

	// Card informations
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 674,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/71/high",
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
			en: "Light Punch",
			fr: "Poing Léger",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Confront",
			fr: "Confrontation",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
