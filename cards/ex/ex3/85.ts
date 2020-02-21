import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-85",
	localId: 85,

	// Card informations
	name: {
		en: "High Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
