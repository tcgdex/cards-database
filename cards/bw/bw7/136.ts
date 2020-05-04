import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-136",
	localId: 136,

	// Card informations
	name: {
		en: "Town Map",
		fr: "Carte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/136/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/136/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/136/high",
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







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
