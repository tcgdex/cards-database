import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-41",
	localId: 41,

	// Card informations
	name: {
		en: "Heracross",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Charging Horn",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
