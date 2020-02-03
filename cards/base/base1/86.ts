import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Pokémon Flute",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card

