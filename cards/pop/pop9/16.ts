import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-16",
	localId: 16,

	// Card informations
	name: {
		en: "Piplup",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Sport",
		},
		text: {
			en: "If Piplup has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wavelet",
		},
		text: {
			en: "If you have Buizel in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
