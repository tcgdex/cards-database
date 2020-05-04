import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-107",
	localId: 107,

	// Card informations
	name: {
		en: "Professor Sycamore",
		fr: "Professeur Platane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
