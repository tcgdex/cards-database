import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 653,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
