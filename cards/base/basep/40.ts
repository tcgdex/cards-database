import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-40",
	localId: 40,

	// Card informations
	name: {
		en: "Pokémon Center",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/40/high.png",
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

