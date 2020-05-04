import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-108",
	localId: 108,

	// Card informations
	name: {
		en: "Shining Kabutops",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Cut",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Water Slash",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
