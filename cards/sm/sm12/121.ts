import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-121",
	localId: 121,

	// Card informations
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 739,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/121/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/121/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/121/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Jab",
			fr: "Taquet",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Confront",
			fr: "Confrontation",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

