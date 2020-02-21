import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-73",
	localId: 73,

	// Card informations
	name: {
		en: "Maxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/73/high",
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
