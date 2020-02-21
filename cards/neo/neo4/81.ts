import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Seel",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 86,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 103,
		name: "Masako Yamashita"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Seel does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
