import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 191,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/85/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/85/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cure Kernels",
			fr: "Graines de soin",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Pokémon.",
			fr: "Retirez 2 marqueurs de dégâts d’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon graine",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
