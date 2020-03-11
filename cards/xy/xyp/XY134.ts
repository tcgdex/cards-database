import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY134",
	localId: "XY134",

	// Card informations
	name: {
		en: "Empoleon BREAK",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY134/high",
		},
	},

	evolveFrom: {
		en: "Empoleon",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Emperor's Command",
		},
		text: {
			en: "This attack does 30 damage times the number of Pokémon your opponent has in play.",
		},
		damage: 30
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
