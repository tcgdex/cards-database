import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Shining Magikarp",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Gold Scale",
		},
		text: {
			en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dragon Bond",
		},
		text: {
			en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
