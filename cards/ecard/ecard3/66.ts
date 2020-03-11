import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Houndour",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
		},
		text: {
			en: "This attack does 10 damage times the number of damage counters on Houndour.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fireworks",
		},
		text: {
			en: "Flip a coin. If tails, discard a Energy card attached to Houndour.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
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
