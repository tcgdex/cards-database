import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-83",
	localId: 83,

	// Card informations
	name: {
		en: "Zubat",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 41,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sachiko Adachi",

	abilities: [{
		id: 905,
		type: AbilityType.POKEBODY,
		name: {
			en: "Self-control",
		},
		text: {
			en: "Zubat can't be Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 10
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
