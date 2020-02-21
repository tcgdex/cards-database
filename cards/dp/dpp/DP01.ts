import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP01",
	localId: "DP01",

	// Card informations
	name: {
		en: "Turtwig",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 387,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP01/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP01/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
