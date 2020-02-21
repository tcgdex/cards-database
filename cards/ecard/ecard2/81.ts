import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Hitmonchan",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rush",
		},
		text: {
			en: "Flip 5 coins. This attack does 10 damage times the number of heads. Hitmonchan can't attack during your next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Punch",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
