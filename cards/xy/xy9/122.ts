import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-122",
	localId: 122,

	// Card informations
	name: {
		en: "Skyla",
		fr: "Carolina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/122/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/122/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
