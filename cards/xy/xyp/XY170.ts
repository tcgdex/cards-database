import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY170",
	localId: "XY170",

	// Card informations
	name: {
		en: "Salamence-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY170/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY170/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beastly Fang",
		},
		text: {
			en: "This attack does 50 more damage for each of your opponent's Pokémon-EX.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Strike",
		},
		text: {
			en: "This Pokémon can't use Dragon Strike during your next turn.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
