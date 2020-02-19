import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-81",
	localId: 81,

	// Card informations
	name: {
		en: "Mysterious Shard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/81/high.png",
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

