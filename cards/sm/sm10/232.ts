import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-232",
	localId: 232,

	// Card informations
	name: {
		en: "Metal Core Barrier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/232/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/232/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

