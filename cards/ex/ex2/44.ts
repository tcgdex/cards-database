import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Linoone",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 264,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/44/high",
		},
	},

	evolveFrom: {
		en: "Zigzagoon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sniff Out",
		},
		text: {
			en: "Put any 1 card from your discard pile into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
