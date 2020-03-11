import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-31",
	localId: 31,

	// Card informations
	name: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/31/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Knockout Needle",
			fr: "Aiguille Neutralisante",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
