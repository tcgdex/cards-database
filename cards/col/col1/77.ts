import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Copycat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
