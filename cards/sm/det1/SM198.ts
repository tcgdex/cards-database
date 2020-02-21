import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM198",
	localId: "SM198",

	// Card informations
	name: {
		fr: "Bulbizarre",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM198/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM198/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 196,
		name: "MPC Film"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Fouet Lianes",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
