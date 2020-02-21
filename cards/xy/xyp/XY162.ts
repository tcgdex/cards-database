import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY162",
	localId: "XY162",

	// Card informations
	name: {
		en: "Greninja",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY162/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Shower",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dual Cut",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
