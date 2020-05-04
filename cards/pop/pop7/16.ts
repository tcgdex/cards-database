import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-16",
	localId: 16,

	// Card informations
	name: {
		en: "Sentret",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 161,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grope",
		},
		text: {
			en: "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
