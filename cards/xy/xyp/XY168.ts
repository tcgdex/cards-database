import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY168",
	localId: "XY168",

	// Card informations
	name: {
		en: "M Garchomp-EX",
	},

	hp: 210,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY168/high",
		},
	},

	evolveFrom: {
		en: "Garchomp-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Edge",
		},
		text: {
			en: "This Pokémon does 10 damage to itself for each damage counter on it.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FAIRY,
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
