import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-91",
	localId: 91,

	// Card informations
	name: {
		en: "Regirock Star",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/91/high",
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
			Type.FIGHTING
		],
		name: {
			en: "Dig Drain",
		},
		text: {
			en: "Remove 1 damage counter from Regirock Star.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Final Blast",
		},
		text: {
			en: "If your opponent has only 1 Prize card left and Regirock Star is the only Pokémon you have in play, this attack's base damage is 100 instead of 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
