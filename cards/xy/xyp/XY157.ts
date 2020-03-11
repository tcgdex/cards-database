import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY157",
	localId: "XY157",

	// Card informations
	name: {
		en: "Beedrill-EX",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY157/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Scrapper",
		},
		text: {
			en: "Discard up to 2 Pokémon Tool cards attached to your opponent's Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
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
