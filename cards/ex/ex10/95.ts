import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-95",
	localId: 95,

	// Card informations
	name: {
		en: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
