import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-81",
	localId: 81,

	// Card informations
	name: {
		en: "Scott",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
