import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-61",
	localId: 61,

	// Card informations
	name: {
		en: "Hau",
		fr: "Tili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/61/high",
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
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
