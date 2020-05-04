import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-69",
	localId: 69,

	// Card informations
	name: {
		en: "Abra",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 63,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Play Search",
		},
		text: {
			en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the 4 other cards back on top of your deck. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ultra Evolution",
		},
		text: {
			en: "Search your deck for Alakazam and put it onto Abra (this counts as evolving Abra). Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
