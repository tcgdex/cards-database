import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-70",
	localId: 70,

	// Card informations
	name: {
		en: "Weedle",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/70/high",
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
			Type.GRASS
		],
		name: {
			en: "Spike Stab",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, this attack does nothing (not even damage).",
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
