import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-34",
	localId: 34,

	// Card informations
	name: {
		en: "Octillery",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/34/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Constrict",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Octazooka",
		},
		text: {
			en: "Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails that attack does nothing. (Benching or evolving that Pokémon ends this effect.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
