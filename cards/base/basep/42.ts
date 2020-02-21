import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-42",
	localId: 42,

	// Card informations
	name: {
		en: "Pokémon Tower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/42/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
