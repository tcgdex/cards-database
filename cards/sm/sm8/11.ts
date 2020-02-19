import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-11",
	localId: 11,

	// Card informations
	name: {
		en: "Hoppip",
		fr: "Granivol",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/11/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/11/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Multiply",
			fr: "Multiplication",
		},
		text: {
			en: "Search your deck for Hoppip and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez Granivol dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

