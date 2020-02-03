import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-115",
	localId: 115,

	// Card informations
	name: {
		en: "Team Galactic's Wager",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/115/high.png",
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

