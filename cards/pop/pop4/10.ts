import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-10",
	localId: 10,

	// Card informations
	name: {
		en: "Scramble Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card

