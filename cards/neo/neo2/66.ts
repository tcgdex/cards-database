import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



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







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
