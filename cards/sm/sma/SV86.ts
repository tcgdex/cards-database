import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV86",
	localId: "SV86",

	// Card informations
	name: {
		en: "Lady",
		fr: "Mademoiselle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
