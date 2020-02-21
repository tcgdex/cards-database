import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Krabby",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/51/high",
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
			Type.WATER
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Basic Pokémon named Krabby and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Irongrip",
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
		name: "Fossil",
		code: "base3"
	}
}

export default card
