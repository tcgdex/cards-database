import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Zorua",
		fr: "Zorua",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 570,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
