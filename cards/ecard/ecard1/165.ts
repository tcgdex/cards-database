import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-165",
	localId: 165,

	// Card informations
	name: {
		en: "Water Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/165/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
