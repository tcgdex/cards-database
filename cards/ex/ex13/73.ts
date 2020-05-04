import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/ex/ex13/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



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





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
