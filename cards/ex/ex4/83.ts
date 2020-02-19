import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Team Magma Hideout",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/83/high.png",
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
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card

