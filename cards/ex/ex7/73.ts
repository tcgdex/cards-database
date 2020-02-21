import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-73",
	localId: 73,

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
			en: "https://assets.tcgdex.net/en/ex/ex7/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Draw",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Remoraid. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Razor Fin",
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
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
