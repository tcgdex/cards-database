import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Cassius",
		fr: "Olivier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/115/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/115/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/115/high",
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
			fr: "Mélangez l'un de vos Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
