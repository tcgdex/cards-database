import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-44",
	localId: 44,

	// Card informations
	name: {
		en: "Frillish",
		fr: "Viskuse",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 592,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/44/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/44/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/44/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

