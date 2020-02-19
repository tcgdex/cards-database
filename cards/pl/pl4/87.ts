import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Expert Belt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card

