import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-40",
	localId: 40,

	// Card informations
	name: {
		en: "Donphan",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/40/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rock Hurl",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
