import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 624,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/81/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/81/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
