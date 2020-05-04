import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy9/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
