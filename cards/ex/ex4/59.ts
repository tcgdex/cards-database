import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-59",
	localId: 59,

	// Card informations
	name: {
		en: "Team Magma's Aron",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dig Under",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
