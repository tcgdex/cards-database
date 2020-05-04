import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-168",
	localId: 168,

	// Card informations
	name: {
		en: "Missing Clover",
		fr: "Trèfle Manquant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/168/high",
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
			fr: "Vous pouvez jouer 4 cartes Trèfle Manquant à la fois.\n\n• Si vous avez joué une carte, regardez la carte du dessus de votre deck.\n• Si vous avez joué 4 cartes, récupérez une carte Récompense. (Cet effet agit une fois pour 4 cartes.)",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
