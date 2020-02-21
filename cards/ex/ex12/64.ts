import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-64",
	localId: 64,

	// Card informations
	name: {
		en: "Skitty",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 137,
		name: "Satoshi Ohta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Important Errands",
		},
		text: {
			en: "Search your deck for a React Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jump On",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
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
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
