import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-25",
	localId: 25,

	// Card informations
	name: {
		en: "Tepig",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 498,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
