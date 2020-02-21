import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY161",
	localId: "XY161",

	// Card informations
	name: {
		en: "Braixen",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 654,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Destructive Flame",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crackling Ribbon",
		},
		text: {},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
