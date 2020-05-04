import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-20",
	localId: 20,

	// Card informations
	name: {
		en: "Ludicolo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/20/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 264,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rain Dish",
		},
		text: {
			en: "At any time between turns, remove 1 damage counter from Ludicolo.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
