import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-61",
	localId: 61,

	// Card informations
	name: {
		en: "Carvanha δ",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/61/high",
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
		name: {
			en: "Bite",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
		},
		text: {
			en: "Flip a coin. If tails, Carvanha does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
