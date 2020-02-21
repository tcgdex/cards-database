import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-67",
	localId: 67,

	// Card informations
	name: {
		en: "Team Magma's Rhyhorn",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 176,
		name: "Yosuke Da Silva"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Double Stab",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
		},
		text: {
			en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 10 damage plus 20 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
