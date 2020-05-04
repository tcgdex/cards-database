import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy6/43/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/43/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HiRON",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
