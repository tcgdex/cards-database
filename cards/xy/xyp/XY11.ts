import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY11",
	localId: "XY11",

	// Card informations
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 672,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
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
