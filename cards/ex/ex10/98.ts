import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-98",
	localId: 98,

	// Card informations
	name: {
		en: "Boost Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

