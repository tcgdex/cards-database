import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-103",
	localId: 103,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/103/high",
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
			fr: "Soignez tous les dégâts de l'un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées au Pokémon choisi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
