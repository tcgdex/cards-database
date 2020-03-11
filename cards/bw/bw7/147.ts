import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-147",
	localId: 147,

	// Card informations
	name: {
		en: "Bianca",
		fr: "Bianca",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/147/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/147/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/147/high",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
