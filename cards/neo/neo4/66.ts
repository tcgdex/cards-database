import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/neo/neo4/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



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







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

