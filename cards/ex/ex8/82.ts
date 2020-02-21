import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-82",
	localId: 82,

	// Card informations
	name: {
		en: "Wurmple",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 265,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/82/high",
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
			en: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from Wurmple and put it on Wurmple. (This counts as evolving Wurmple.) Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Miracle Essence",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. Each Defending Pokémon is now affected by that Special Condition.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
