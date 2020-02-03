import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 684,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/94/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/94/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
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
			en: "Fairy Wind",
			fr: "Vent Féérique",
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

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

