import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-54",
	localId: 54,

	// Card informations
	name: {
		en: "Krabby",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/54/high",
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
			en: "Vital Pinchers",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
