import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-135",
	localId: 135,

	// Card informations
	name: {
		en: "Mystery Plate Gamma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/135/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Hiromichi Sugiyama",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
