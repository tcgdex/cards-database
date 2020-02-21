import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-118",
	localId: 118,

	// Card informations
	name: {
		en: "Multi Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
