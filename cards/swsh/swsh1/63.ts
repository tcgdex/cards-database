import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Snom",
		fr: "Frissonille",
	},

	hp: 50,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/63/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/63/low",
		}
	},

	evolveTo: [{
		en: "Frosmoth",
		fr: "Beldeneige",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
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
