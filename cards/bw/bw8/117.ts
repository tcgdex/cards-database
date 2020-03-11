import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-117",
	localId: 117,

	// Card informations
	name: {
		en: "Bicycle",
		fr: "Bicyclette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/117/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/117/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez des cartes jusqu'à ce que vous ayez 4 cartes en main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
