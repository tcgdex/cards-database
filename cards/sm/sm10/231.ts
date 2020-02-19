import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-231",
	localId: 231,

	// Card informations
	name: {
		en: "Fire Crystal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/231/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/231/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

