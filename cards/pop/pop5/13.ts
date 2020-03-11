import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-13",
	localId: 13,

	// Card informations
	name: {
		en: "Pikachu (Delta Species)",
	},

	hp: 40,

	type: [
		Type.METAL,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Electric Punch",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
		},
		text: {
			en: "Flip a coin for each Energy attached to Pikachu. This attack does 10 damage plus 20 more damage for each heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
