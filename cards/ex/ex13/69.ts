import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-69",
	localId: 69,

	// Card informations
	name: {
		en: "Magikarp δ",
	},

	hp: 30,

	type: [
		Type.METAL,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/69/high",
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
			Type.METAL
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
