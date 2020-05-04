import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-79",
	localId: 79,

	// Card informations
	name: {
		en: "Totodile",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 158,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin-ichi Yoshikawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
		},
		text: {
			en: "Does 10 damage for each damage counter on Totodile.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
