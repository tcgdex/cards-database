import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-131",
	localId: 131,

	// Card informations
	name: {
		en: "Pokémon Park",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/131/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Kazuo Yazawa",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
