import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-69",
	localId: 69,

	// Card informations
	name: {
		en: "Team Aqua Schemer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/69/high",
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











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
