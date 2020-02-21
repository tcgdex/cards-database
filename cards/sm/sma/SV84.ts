import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV84",
	localId: "SV84",

	// Card informations
	name: {
		en: "Guzma",
		fr: "Guzma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
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
