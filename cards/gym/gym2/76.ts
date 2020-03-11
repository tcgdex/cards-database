import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Giovanni's Nidoran♂",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/76/high",
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
			en: "Double Kick",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Retaliation",
		},
		text: {
			en: "You can't use this attack unless Giovanni's Nidoran M has 2 or more damage counters on it.",
		},
		damage: 30
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
