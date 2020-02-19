import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-97",
	localId: 97,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/97/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

