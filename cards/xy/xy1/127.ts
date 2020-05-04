import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-127",
	localId: 127,

	// Card informations
	name: {
		en: "Shauna",
		fr: "Sannah",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/127/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/127/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/127/high",
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
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
