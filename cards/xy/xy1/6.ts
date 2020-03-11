import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Ledyba",
		fr: "Coxy",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 165,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
