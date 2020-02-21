import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 173,
		name: "K. Hoshiba"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
