import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-87",
	localId: 87,

	// Card informations
	name: {
		en: "Ponyta",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 77,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flame Tail",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
