import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-93",
	localId: 93,

	// Card informations
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 136,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
