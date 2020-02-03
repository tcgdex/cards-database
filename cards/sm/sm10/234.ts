import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-234",
	localId: 234,

	// Card informations
	name: {
		en: "Triple Acceleration Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/234/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/234/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

