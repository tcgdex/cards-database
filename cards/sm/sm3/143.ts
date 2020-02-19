import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-143",
	localId: 143,

	// Card informations
	name: {
		en: "Guzma",
		fr: "Guzma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/143/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/143/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/143/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/143/high.png",
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
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

