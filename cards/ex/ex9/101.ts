import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-101",
	localId: 101,

	// Card informations
	name: {
		en: "Grass Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card

