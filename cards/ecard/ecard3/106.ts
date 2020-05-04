import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-106",
	localId: 106,

	// Card informations
	name: {
		en: "Sunkern",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 191,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Blot",
		},
		text: {
			en: "If there are any damage counters on Sunkern, remove 1 of them.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
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
