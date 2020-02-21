import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-110",
	localId: 110,

	// Card informations
	name: {
		en: "Cedric Juniper",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
