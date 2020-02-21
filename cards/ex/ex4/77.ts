import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Team Aqua Conspirator",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/77/high",
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
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
