import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-103",
	localId: 103,

	// Card informations
	name: {
		en: "Porygon",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masako Yamashita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Data Sort",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Trainer card in your discard pile, show it to your opponent, and shuffle it into your deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
