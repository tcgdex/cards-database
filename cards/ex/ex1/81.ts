import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Energy Restore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 125,
		name: "Hideyuki Nakajima"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card

