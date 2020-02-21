import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-79",
	localId: 79,

	// Card informations
	name: {
		en: "Mysterious Fossil",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
