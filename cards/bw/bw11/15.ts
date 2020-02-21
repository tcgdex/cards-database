import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-15",
	localId: 15,

	// Card informations
	name: {
		en: "Virizion",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 640,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
		},
		text: {
			en: "Draw 2 cards.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Wallop",
		},
		text: {
			en: "During your next turn, this Pokémon's Leaf Wallop attack does 40 more damage (before applying Weakness and Resistance).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
