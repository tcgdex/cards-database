import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-18",
	localId: 18,

	// Card informations
	name: {
		en: "Wingull",
		fr: "Goélise",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 278,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/18/high",
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
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
