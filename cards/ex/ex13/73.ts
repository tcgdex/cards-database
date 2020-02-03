import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-73",
	localId: 73,

	// Card informations
	name: {
		en: "Oddish δ",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/73/high.png",
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
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Blot",
		},
		text: {
			en: "Remove 2 damage counters from Oddish.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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

