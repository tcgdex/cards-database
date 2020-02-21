import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-3",
	localId: 3,

	// Card informations
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 265,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/3/high",
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
			Type.GRASS
		],
		name: {
			en: "Flock",
			fr: "Nuée",
		},
		text: {
			en: "Search your deck for Wurmple and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez Chenipotte dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
