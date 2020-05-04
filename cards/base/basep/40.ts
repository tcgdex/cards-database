import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "basep-40",
	localId: 40,

	// Card informations
	name: {
		en: "Pokémon Center",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/40/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
