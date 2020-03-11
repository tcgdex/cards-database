import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-72",
	localId: 72,

	// Card informations
	name: {
		en: "Giovanni's Machop",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chop",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Fury Punch",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni's Machop.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
