import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-82",
	localId: 82,

	// Card informations
	name: {
		en: "Professor Birch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/82/high",
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
