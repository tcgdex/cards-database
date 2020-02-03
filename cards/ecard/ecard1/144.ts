import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/ecard/ecard1/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/144/high.png",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card

