import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-95",
	localId: 95,

	// Card informations
	name: {
		en: "Hooligans Jim & Cas",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
