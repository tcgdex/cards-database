import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-132",
	localId: 132,

	// Card informations
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/132/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/132/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 2 cartes Supporter de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
