import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Cheren",
		fr: "Tcheren",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/91/high",
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
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
