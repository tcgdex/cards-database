import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 616,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Absorb",
			fr: "Vol-Vie",
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



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
