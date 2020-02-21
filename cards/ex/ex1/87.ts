import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Pokémon Reversal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
