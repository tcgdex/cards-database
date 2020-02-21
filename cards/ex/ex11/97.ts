import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-97",
	localId: 97,

	// Card informations
	name: {
		en: "Holon Scientist",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/97/high",
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
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
