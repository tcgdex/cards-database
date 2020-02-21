import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Tympole",
		fr: "Tritonde",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 535,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/22/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/22/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Vibration",
			fr: "Vibration",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
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
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
