import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY186",
	localId: "XY186",

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY186/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY186/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



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
