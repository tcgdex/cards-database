import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-77",
	localId: 77,

	// Card informations
	name: {
		en: "Lanette's Net Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/77/high.png",
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
		name: "Emerald",
		code: "ex9"
	}
}

export default card

