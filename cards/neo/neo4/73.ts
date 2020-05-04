import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-73",
	localId: 73,

	// Card informations
	name: {
		en: "Machop",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chop",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
