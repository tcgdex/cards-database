import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-79",
	localId: 79,

	// Card informations
	name: {
		en: "Professor Elm's Training Method",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/79/high.png",
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

