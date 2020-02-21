import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-31",
	localId: 31,

	// Card informations
	name: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
