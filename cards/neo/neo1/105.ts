import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Recycle Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 158,
		name: "Hideki Kazama"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
