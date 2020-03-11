import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-80",
	localId: 80,

	// Card informations
	name: {
		en: "Slowpoke",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Confusion Wave",
		},
		text: {
			en: "Both Slowpoke and the Defending Pokémon are now Confused.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
