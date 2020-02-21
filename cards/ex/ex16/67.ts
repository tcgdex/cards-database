import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-67",
	localId: 67,

	// Card informations
	name: {
		en: "Torchic",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Super Singe",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
