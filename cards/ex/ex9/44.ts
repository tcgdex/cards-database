import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-44",
	localId: 44,

	// Card informations
	name: {
		en: "Cacnea",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spike Cannon",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
