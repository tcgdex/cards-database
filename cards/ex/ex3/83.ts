import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Buffer Piece",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card

