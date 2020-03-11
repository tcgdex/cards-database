import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW29",
	localId: "BW29",

	// Card informations
	name: {
		en: "Victory Cup",
		fr: "Coupe Victoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW29/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW29/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW29/high",
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
			fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
