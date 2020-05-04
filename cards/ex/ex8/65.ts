import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-65",
	localId: 65,

	// Card informations
	name: {
		en: "Makuhita",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Asuka Iwashita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thrust",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
