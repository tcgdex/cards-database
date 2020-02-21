import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-47",
	localId: 47,

	// Card informations
	name: {
		en: "Cacnea",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/47/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
