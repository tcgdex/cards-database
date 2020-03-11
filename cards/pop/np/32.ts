import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-32",
	localId: 32,

	// Card informations
	name: {
		en: "Articuno ex",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 1108,
		type: AbilityType.POKEBODY,
		name: {
			en: "Synchronized Lift",
		},
		text: {
			en: "As long as you have Zapdos ex and Moltres ex in play, the Retreat Cost for Articuno ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ice Gift",
		},
		text: {
			en: "You may move a Water Energy card attached to Articuno ex to 1 of your Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Freezing Wing",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
