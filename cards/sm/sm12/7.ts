import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-7",
	localId: 7,

	// Card informations
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 191,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
