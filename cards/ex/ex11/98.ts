import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-98",
	localId: 98,

	// Card informations
	name: {
		en: "Holon Transceiver",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
