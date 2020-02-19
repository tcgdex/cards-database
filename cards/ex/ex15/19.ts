import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-19",
	localId: 19,

	// Card informations
	name: {
		en: "Lickitung δ",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lap Up",
		},
		text: {
			en: "Draw 2 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Delta Mind",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon. If that Pokémon has δ on its card, put 3 damage counters instead.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

