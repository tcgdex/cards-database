import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM01",
	localId: "SM01",

	// Card informations
	name: {
		en: "Rowlet",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 722,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM01/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM01/high.png",
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
			Type.GRASS
		],
		name: {
			en: "Fury Attack",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

