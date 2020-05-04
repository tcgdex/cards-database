import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV83",
	localId: "SV83",

	// Card informations
	name: {
		en: "Fisherman",
		fr: "Pêcheur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
