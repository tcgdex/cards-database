import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-37",
	localId: 37,

	// Card informations
	name: {
		en: "Dark Omanyte",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Cannon",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
