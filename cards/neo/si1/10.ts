import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Tentacruel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/10/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tentacle Grip",
		},
		text: {
			en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tentacle Grip",
		},
		text: {
			en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
