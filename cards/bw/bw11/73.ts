import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-73",
	localId: 73,

	// Card informations
	name: {
		en: "Solosis",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 577,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HiRON",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
