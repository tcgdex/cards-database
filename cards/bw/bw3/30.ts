import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Frillish",
		fr: "Viskuse",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 592,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/30/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/30/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
