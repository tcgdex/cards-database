import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY65",
	localId: "XY65",

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.EX,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Suersonic Flight",
			fr: "Voyage Supersonique",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyburn",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
