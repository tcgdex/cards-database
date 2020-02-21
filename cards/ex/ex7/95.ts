import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-95",
	localId: 95,

	// Card informations
	name: {
		en: "R Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
