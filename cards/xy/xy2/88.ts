import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Blacksmith",
		fr: "Forgeron",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/88/high",
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
			fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à l'un de vos Pokémon Fire.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
