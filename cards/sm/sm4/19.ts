import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 220,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Eri Yamaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
