import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-55",
	localId: 55,

	// Card informations
	name: {
		en: "Natu δ",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Flop",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
