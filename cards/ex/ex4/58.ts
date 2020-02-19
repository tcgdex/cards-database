import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-58",
	localId: 58,

	// Card informations
	name: {
		en: "Team Magma's Aron",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/58/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud Slap",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
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

