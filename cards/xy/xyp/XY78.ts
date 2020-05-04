import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY78",
	localId: "XY78",

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Eon Connection",
			fr: "Connexion Éon",
		},
		text: {
			en: "Draw a card. If Latios is on your Bench, draw 1 more card.",
			fr: "Piochez une carte. Si Latios est sur votre Banc, piochez 1 carte supplémentaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Wing",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
