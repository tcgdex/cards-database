import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Gothita",
		fr: "Scrutella",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 574,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/44/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/44/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
