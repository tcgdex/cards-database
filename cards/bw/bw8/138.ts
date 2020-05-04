import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-138",
	localId: 138,

	// Card informations
	name: {
		en: "Random Receiver",
		fr: "Récepteur Aléatoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/138/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/138/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/138/high",
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
			fr: "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Supporter. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
