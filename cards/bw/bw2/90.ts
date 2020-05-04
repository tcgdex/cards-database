import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Bianca",
		fr: "Bianca",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/90/high",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
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
