import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-79",
	localId: 79,

	// Card informations
	name: {
		en: "Team Aqua's Technical Machine 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
