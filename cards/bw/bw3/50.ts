import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Solosis",
		fr: "Nucléos",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 577,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/50/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/50/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
