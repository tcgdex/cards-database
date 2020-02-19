import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-78",
	localId: 78,

	// Card informations
	name: {
		en: "Dual Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 56,
		name: "\"Big Mama\" Tagawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card

