import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Kangaskhan",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Baby Outing",
		},
		text: {
			en: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it in your hand. Shuffle the rest into your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
