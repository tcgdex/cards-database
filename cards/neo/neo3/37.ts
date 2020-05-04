import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Seaking",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/37/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Horn Swipe",
		},
		text: {
			en: "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both are tails, this attack does 20 damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
