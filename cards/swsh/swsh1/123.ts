import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/123/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/123/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 42,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge Out",
			fr: "Allonger",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
