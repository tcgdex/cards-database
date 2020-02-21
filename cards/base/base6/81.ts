import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-81",
	localId: 81,

	// Card informations
	name: {
		en: "Mankey",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mischief",
		},
		text: {
			en: "Shuffle your opponent's deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Anger",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more; if tails, this attack does 20 damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
