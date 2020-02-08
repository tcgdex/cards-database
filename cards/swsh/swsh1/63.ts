import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/63/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/63/low.png",
		}
	},

	evolveTo: [{
		en: "Frosmoth",
		fr: "Beldeneige",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Mina Nakai"
	},



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
