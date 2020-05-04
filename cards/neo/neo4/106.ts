import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-106",
	localId: 106,

	// Card informations
	name: {
		en: "Shining Celebi",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Healing Water",
		},
		text: {
			en: "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.PSYCHIC
		],
		name: {
			en: "Miracle Leaf",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
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
