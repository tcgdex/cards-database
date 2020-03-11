import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-52",
	localId: 52,

	// Card informations
	name: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 41,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/52/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/52/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
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

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
