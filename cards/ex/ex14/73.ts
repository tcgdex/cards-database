import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-73",
	localId: 73,

	// Card informations
	name: {
		en: "Celio's Network",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/73/high",
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
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
