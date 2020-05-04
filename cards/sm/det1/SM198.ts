import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "MPC Film",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
