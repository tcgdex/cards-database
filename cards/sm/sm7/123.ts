import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-123",
	localId: 123,

	// Card informations
	name: {
		en: "Acro Bike",
		fr: "Vélo Cross",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/123/high",
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
			fr: "Regardez les 2 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Défaussez l’autre carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
