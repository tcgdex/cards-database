import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-143",
	localId: 143,

	// Card informations
	name: {
		en: "Cyclone Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/143/high",
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
