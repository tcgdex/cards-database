import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-68",
	localId: 68,

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/68/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/68/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/68/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Never Enough",
			fr: "Insatiable",
		},
		text: {
			en: "Discard a card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
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

