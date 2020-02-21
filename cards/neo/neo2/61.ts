import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Pineco",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 204,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Burst",
		},
		text: {
			en: "Flip a coin. If heads, Pineco does 40 damage to itself and 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, this attack does nothing (not even damage).",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
