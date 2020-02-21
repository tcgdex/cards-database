import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Team Magma's Rhyhorn",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/68/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
		},
		text: {
			en: "You may discard any Stadium card in play.",
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
