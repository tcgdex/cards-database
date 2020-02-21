import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-83",
	localId: 83,

	// Card informations
	name: {
		en: "PokéNav",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
