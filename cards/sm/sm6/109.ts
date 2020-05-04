import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-109",
	localId: 109,

	// Card informations
	name: {
		en: "Lady",
		fr: "Mademoiselle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/109/high",
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
			fr: "Cherchez jusqu’à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
