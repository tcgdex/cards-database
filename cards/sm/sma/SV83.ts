import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV83/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV83/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main.",
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

