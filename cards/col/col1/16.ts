import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Magmortar",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/16/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hard Crush",
		},
		text: {
			en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mantle Bazooka",
		},
		text: {
			en: "Discard 2 Fire Energy attached to Magmortar.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
