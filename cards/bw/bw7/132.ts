import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-132",
	localId: 132,

	// Card informations
	name: {
		en: "Potion",
		fr: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/132/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/132/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 30 dégâts à 1 de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
