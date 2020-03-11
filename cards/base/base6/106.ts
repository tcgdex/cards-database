import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Challenge!",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/106/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Kagemaru Himeno",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
