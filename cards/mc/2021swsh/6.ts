import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-6",
	localId: 6,

	// Card informations
	name: {
		en: "Chespin",
		fr: "Marisson",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 650,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
