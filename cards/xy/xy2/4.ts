import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 204,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
