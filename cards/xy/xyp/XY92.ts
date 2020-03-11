import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY92",
	localId: "XY92",

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Hunt",
			fr: "Stop Θ",
		},
		text: {
			en: "Flip 3 coins. For each heads, attach a basic Energy card from your discard pile to your Benched Pokémon-EX in any way you like.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
		},
		damage: 20
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
