import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY41",
	localId: "XY41",

	// Card informations
	name: {
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY41/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY41/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Whirlpool",
			fr: "Siphon Colossal",
		},
		text: {
			en: "Return 2 Water Energy attached to this Pokémon to your hand.",
			fr: "Reprenez 2 Énergies Water attachées à ce Pokémon dans votre main.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
