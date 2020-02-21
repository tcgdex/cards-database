import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Charmander",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
