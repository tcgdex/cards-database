import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-66",
	localId: 66,

	// Card informations
	name: {
		en: "Girafarig",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Bite",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
		},
		damage: 10
	}],







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
