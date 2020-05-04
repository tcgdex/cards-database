import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-38",
	localId: 38,

	// Card informations
	name: {
		en: "Frillish",
		fr: "Viskuse",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 592,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/38/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/38/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Absorb",
			fr: "Vol-Vie",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
