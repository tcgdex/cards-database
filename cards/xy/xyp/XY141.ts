import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY141",
	localId: "XY141",

	// Card informations
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY141/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY141/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY141/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Dual Claw",
			fr: "Paire de Griffes",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Blast",
			fr: "Explo-Draco",
		},
		text: {
			en: "Discard 1 Fire Energy and 1 Lightning Energy attached to this Pokémon.",
			fr: "Défaussez 1 Énergie Fire et 1 Énergie Lightning attachées à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
