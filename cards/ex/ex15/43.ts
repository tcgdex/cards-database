import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-43",
	localId: 43,

	// Card informations
	name: {
		en: "Bagon δ",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Granite Head",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Bagon by attacks is reduced by 10 (after applying Weakness and Resistance).",
		},
		damage: 10
	}],







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
