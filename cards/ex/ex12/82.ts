import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-82",
	localId: 82,

	// Card informations
	name: {
		en: "React Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/82/high",
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











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
