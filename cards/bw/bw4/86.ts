import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-86",
	localId: 86,

	// Card informations
	name: {
		en: "Cilan",
		fr: "Rachid",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/86/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/86/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/86/high",
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
			fr: "Cherchez 3 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
