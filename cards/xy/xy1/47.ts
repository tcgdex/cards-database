import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Ekans",
		fr: "Abo",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/47/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/47/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/47/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "XY",
		code: "xy1"
	}
}

export default card
