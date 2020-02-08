import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-54",
	localId: 54,

	// Card informations
	name: {
		en: "Sobble",
		fr: "Larméléon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/54/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/54/low.png",
		}
	},

	evolveTo: [{
		en: "Drizzile",
		fr: "Arrozard",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
