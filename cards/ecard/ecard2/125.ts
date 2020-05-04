import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-125",
	localId: 125,

	// Card informations
	name: {
		en: "Healing Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/125/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Shin-ichi Yoshida",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
