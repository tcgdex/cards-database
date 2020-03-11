import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-144",
	localId: 144,

	// Card informations
	name: {
		en: "Multi Technical Machine 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/144/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "\"Big Mama\" Tagawa",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
