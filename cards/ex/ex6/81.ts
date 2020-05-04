import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-81",
	localId: 81,

	// Card informations
	name: {
		en: "Spearow",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 21,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Claw",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
