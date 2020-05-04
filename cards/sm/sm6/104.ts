import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-104",
	localId: 104,

	// Card informations
	name: {
		en: "Crasher Wake",
		fr: "Lovis le Teigneux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/104/high",
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
			fr: "Défaussez 2 cartes Énergie Water de votre main. Dans ce cas, cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
