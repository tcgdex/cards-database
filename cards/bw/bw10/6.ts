import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-6",
	localId: 6,

	// Card informations
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 588,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
