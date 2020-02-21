import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-87",
	localId: 87,

	// Card informations
	name: {
		en: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/87/high",
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











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
