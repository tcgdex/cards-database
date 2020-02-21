import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 10
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
