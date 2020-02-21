import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-72",
	localId: 72,

	// Card informations
	name: {
		en: "Castaway",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
