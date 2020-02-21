import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/96/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/96/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 31,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
