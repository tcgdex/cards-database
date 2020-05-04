import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-46",
	localId: 46,

	// Card informations
	name: {
		en: "Dratini δ",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
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
