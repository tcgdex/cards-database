import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-73",
	localId: 73,

	// Card informations
	name: {
		en: "Copycat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/73/high",
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
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
