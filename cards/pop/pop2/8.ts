import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Mr. Briney's Compassion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/8/high.png",
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
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card

