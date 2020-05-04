import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-96",
	localId: 96,

	// Card informations
	name: {
		en: "Xtransceiver",
		fr: "Vokit",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
