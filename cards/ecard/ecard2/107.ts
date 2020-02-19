import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-107",
	localId: 107,

	// Card informations
	name: {
		en: "Sentret",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 161,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/107/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 126,
		name: "Hizuki Misono"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spy",
		},
		text: {
			en: "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Scratch",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
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

