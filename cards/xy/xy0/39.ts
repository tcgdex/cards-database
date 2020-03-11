import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-39",
	localId: 39,

	// Card informations
	name: {
		en: "Tierno",
		fr: "Tierno",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
