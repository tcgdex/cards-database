import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-51",
	localId: 51,

	// Card informations
	name: {
		en: "Clamperl",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 366,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/51/high",
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
			en: "Iron Defense",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Clamperl during your opponent's next turn.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Clamp Splash",
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
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
