import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Giovanni's Nidoran♀",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Horn Thrust",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Giovanni's Nidoran F does 20 damage to itself.",
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
