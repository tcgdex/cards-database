import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-107",
	localId: 107,

	// Card informations
	name: {
		en: "Psychic Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
