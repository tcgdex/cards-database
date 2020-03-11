import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-58",
	localId: 58,

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
