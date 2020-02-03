import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-89",
	localId: 89,

	// Card informations
	name: {
		en: "Professor Cozmo's Discovery",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/89/high.png",
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card

