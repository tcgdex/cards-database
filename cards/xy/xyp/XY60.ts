import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY60",
	localId: "XY60",

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY60/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Full Retaliation",
			fr: "Double Θ",
		},
		text: {
			en: "This attack does 30 more damage for each damage counter on each of your Benched Magikarp.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage. If tails, this Pokémon does 30 damage to itself.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
