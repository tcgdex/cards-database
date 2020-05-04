import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-107",
	localId: 107,

	// Card informations
	name: {
		en: "Fossil Excavation Map",
		fr: "Carte d’Excavation de Fossiles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Cherchez une carte Fossile Inconnu dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.\n• Ajoutez une carte Fossile Inconnu de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
