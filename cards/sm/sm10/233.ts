import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-233",
	localId: 233,

	// Card informations
	name: {
		en: "Pokégear 3.0",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/233/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/233/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
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
