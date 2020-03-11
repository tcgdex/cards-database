import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-150",
	localId: 150,

	// Card informations
	name: {
		en: "Town Map",
		fr: "Carte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/150/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/150/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/150/high",
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
			fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
