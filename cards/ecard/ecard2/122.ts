import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-122",
	localId: 122,

	// Card informations
	name: {
		en: "Fire Cube 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/122/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 56,
		name: "\"Big Mama\" Tagawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
