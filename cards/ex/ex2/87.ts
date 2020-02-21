import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Lanette's Net Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/87/high",
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
