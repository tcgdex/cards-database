import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Ledyba",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 165,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masako Yamashita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teary Eyes",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Ledyba is reduced by 20.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Quick Turn",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
