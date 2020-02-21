import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-72",
	localId: 72,

	// Card informations
	name: {
		en: "Buffer Piece",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/72/high",
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
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
