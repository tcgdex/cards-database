import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Professor Oak's New Theory",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/83/high",
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
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
