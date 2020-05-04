import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Master Ball",
		fr: "Master Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
