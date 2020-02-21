import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Wally's Training",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/89/high",
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
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
