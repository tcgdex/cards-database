import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-87",
	localId: 87,

	// Card informations
	name: {
		en: "Ancient Tomb",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
