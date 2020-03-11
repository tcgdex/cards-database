import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-52",
	localId: 52,

	// Card informations
	name: {
		en: "Cofagrigus",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/52/high",
		},
	},

	evolveFrom: {
		en: "Yamask",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chuck",
		},
		text: {
			en: "Discard as many Pokémon Tool cards as you like from your hand. This attack does 40 damage times the number of cards you discarded.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Lock Up",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
