import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-38",
	localId: 38,

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
			en: "https://assets.tcgdex.net/en/ex/ex1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/38/high",
		},
	},

	evolveFrom: {
		en: "Zigzagoon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Seek Out",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Headbutt",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
