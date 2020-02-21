import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Team Aqua's Carvanha",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Fin",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
