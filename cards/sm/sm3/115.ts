import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-115",
	localId: 115,

	// Card informations
	name: {
		en: "Guzma",
		fr: "Guzma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
