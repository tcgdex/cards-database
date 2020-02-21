import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-41",
	localId: 41,

	// Card informations
	name: {
		en: "Lucky Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/41/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
