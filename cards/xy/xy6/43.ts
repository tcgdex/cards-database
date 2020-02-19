import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-43",
	localId: 43,

	// Card informations
	name: {
		en: "Togepi",
		fr: "Togepi",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/43/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/43/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 105,
		name: "HiRON"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Kiss",
			fr: "Doux Baiser",
		},
		text: {
			en: "Your opponent draws a card.",
			fr: "Votre adversaire pioche une carte.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

