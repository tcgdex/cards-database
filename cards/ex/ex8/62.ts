import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-62",
	localId: 62,

	// Card informations
	name: {
		en: "Koffing",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Smog",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
