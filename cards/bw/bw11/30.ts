import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-30",
	localId: 30,

	// Card informations
	name: {
		en: "Magikarp",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flailing Flop",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
