import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Celebi",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Psychic Leaf",
		},
		text: {
			en: "Flip a coin for each Energy attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
