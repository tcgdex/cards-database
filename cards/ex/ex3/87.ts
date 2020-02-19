import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mr. Briney's Compassion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/87/high.png",
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
		name: "Dragon",
		code: "ex3"
	}
}

export default card

