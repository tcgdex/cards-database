import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 684,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Lick Away",
			fr: "Lèche-Lèche",
		},
		text: {
			en: "Remove all Special Conditions from this Pokémon.",
			fr: "Retirez tous les États Spéciaux de ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
