import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-142",
	localId: 142,

	// Card informations
	name: {
		en: "Bounce Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/142/high",
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
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
