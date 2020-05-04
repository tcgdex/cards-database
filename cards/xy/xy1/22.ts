import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Pansear",
		fr: "Flamajou",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 513,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fireworks",
			fr: "Feu d'Artifice",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
