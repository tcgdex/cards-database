import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-13",
	localId: 13,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/13/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/13/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/13/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

