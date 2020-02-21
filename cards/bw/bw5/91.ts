import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Cheren",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
