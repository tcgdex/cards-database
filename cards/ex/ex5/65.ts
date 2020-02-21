import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-65",
	localId: 65,

	// Card informations
	name: {
		en: "Meditite",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Chop",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Calm Mind",
		},
		text: {
			en: "Remove 2 damage counters from Meditite (remove 1 if there is only 1).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
