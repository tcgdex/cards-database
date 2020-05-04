import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY83",
	localId: "XY83",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gather Light",
			fr: "Lumière Collectée",
		},
		text: {
			en: "Move as many Energy as you like from your Benched Pokémon to this Pokémon.",
			fr: "Déplacez autant d'Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Judgment Blast",
		},
		text: {
			en: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
