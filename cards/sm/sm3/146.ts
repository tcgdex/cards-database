import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-146",
	localId: 146,

	// Card informations
	name: {
		en: "Sophocles",
		fr: "Chrys",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. Dans ce cas, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
