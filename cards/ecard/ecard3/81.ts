import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Nidoran♀",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masako Yamashita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Basic Pokémon card named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your bench is full.)",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Scratch",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
