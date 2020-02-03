import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-124",
	localId: 124,

	// Card informations
	name: {
		en: "Time-Space Distortion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},











	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card

