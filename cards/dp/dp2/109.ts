import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-109",
	localId: 109,

	// Card informations
	name: {
		en: "Bebe's Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
