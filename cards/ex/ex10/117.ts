import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-117",
	localId: 117,

	// Card informations
	name: {
		en: "Celebi ex",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spiral Leaf",
		},
		text: {
			en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Pokemon. If tails, remove 1 damage country for each of your Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Time Trap",
		},
		text: {
			en: "Flip a coin. If heads, look at the top 4 cards of your opponent's deck, and put them back on top of your opponent's deck in any order. If tails, look at the top 4 cards of your deck, and put them back on top of your deck in any order.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
