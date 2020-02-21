import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Low Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
