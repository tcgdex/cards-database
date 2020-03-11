import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-22",
	localId: 22,

	// Card informations
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 209,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
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

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
