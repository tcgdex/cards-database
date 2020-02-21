import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Remoraid",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 223,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/50/high",
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
			Type.WATER
		],
		name: {
			en: "Sharpshooting",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
