import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-76",
	localId: 76,

	// Card informations
	name: {
		en: "Crystal Shard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
