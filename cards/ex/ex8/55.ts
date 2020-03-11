import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-55",
	localId: 55,

	// Card informations
	name: {
		en: "Beldum",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flip Over",
		},
		text: {
			en: "Beldum does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
