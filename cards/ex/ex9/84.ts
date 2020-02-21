import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-84",
	localId: 84,

	// Card informations
	name: {
		en: "Scott",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/84/high",
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
