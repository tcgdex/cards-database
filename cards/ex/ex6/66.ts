import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-66",
	localId: 66,

	// Card informations
	name: {
		en: "Krabby",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/66/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Irongrip",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Nap",
		},
		text: {
			en: "Remove 2 damage counters from Krabby (remove 1 if there is only 1).",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
