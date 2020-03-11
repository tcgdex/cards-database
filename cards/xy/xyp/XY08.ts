import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY08",
	localId: "XY08",

	// Card informations
	name: {
		en: "Yveltal-EX",
		fr: "Xerneas-EX",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY08/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY08/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY08/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY08/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Evil Ball",
			fr: "Percée",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Y Cyclone",
			fr: "Explosion X",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Ce Pokémon ne peut pas utiliser Explosion X pendant votre prochain tour.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
