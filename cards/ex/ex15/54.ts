import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-54",
	localId: 54,

	// Card informations
	name: {
		en: "Mareep δ",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sachiko Adachi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
