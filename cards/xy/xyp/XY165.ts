import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY165",
	localId: "XY165",

	// Card informations
	name: {
		en: "Magearna",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 801,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY165/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Entertain",
		},
		text: {
			en: "Heal 40 damage from 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Prismatic Wave",
		},
		text: {
			en: "This attack does 20 damage times the number of different types of Pokémon on your opponent's Bench.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
