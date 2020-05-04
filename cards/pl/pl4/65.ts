import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-65",
	localId: 65,

	// Card informations
	name: {
		en: "Geodude",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Motofumi Fujiwara",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Stone Barrage",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
