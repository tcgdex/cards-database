import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Heal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/8/high.png",
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

