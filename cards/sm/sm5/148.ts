import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-148",
	localId: 148,

	// Card informations
	name: {
		en: "Cynthia",
		fr: "Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
