import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 653,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/24/high",
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
			Type.FIRE
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
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
