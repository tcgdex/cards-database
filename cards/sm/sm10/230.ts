import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-230",
	localId: 230,

	// Card informations
	name: {
		en: "Electromagnetic Radar",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/230/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/230/high.png",
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

