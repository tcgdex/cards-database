import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC7",
	localId: "RC7",

	// Card informations
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 361,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC7/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC7/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC7/high",
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
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
