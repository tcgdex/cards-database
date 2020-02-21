import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-99",
	localId: 99,

	// Card informations
	name: {
		en: "Cyclone Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
