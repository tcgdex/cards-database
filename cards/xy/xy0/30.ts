import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-30",
	localId: 30,

	// Card informations
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 659,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
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
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
