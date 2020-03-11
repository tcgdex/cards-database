import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-124",
	localId: 124,

	// Card informations
	name: {
		en: "Fast Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/124/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Katsura Tabata",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
