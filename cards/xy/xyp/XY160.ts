import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY160",
	localId: "XY160",

	// Card informations
	name: {
		en: "Black Kyurem",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY160/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Wing",
		},
		text: {},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frosty Thunder",
		},
		text: {
			en: "If this Pokémon has any Lightning Energy attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply weakness and Resistance for Benched Pokémon.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
