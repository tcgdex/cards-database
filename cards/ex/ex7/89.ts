import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-89",
	localId: 89,

	// Card informations
	name: {
		en: "Rocket's Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card

