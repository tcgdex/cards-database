import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-93",
	localId: 93,

	// Card informations
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 431,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Act Cute",
			fr: "Si Mignon",
		},
		text: {
			en: "Your opponent puts a card from his or her hand on the bottom of his or her deck.",
			fr: "Votre adversaire place une carte de sa main en dessous de son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
