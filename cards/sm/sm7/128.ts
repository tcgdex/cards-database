import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-128",
	localId: 128,

	// Card informations
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Zu-Ka",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Ajoutez une carte Énergie de base de votre pile de défausse à votre main.\n• Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
