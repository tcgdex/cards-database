import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Bagon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Risky Kick",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER
		],
		name: {
			en: "Dragon Eye",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
