import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Crobat",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/3/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flutter Trick",
		},
		text: {
			en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
