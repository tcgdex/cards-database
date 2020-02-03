import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY83/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY83/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

