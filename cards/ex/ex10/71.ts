import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-71",
	localId: 71,

	// Card informations
	name: {
		en: "Remoraid",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 223,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
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
			Type.COLORLESS
		],
		name: {
			en: "Splash",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
