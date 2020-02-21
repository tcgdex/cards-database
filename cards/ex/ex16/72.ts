import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-72",
	localId: 72,

	// Card informations
	name: {
		en: "Drake's Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
