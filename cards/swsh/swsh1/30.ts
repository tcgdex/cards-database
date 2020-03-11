import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Scorbunny",
		fr: "Flambino",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/30/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/30/low",
		}
	},

	evolveTo: [{
		en: "Raboot",
		fr: "Lapyro",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
