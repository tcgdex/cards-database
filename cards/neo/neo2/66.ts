import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Tyrogue",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Punch",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
