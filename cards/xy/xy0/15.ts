import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-15",
	localId: 15,

	// Card informations
	name: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 692,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/15/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/15/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/15/high.png",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card

