import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-2",
	localId: 2,

	// Card informations
	name: {
		en: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dive",
		},
		text: {
			en: "Look at the top 7 cards of your deck, choose 1 of them, and put it into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Glow",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, remove from Manaphy the number of damage counters equal to the damage you did to that Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
