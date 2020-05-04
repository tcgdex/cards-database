import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Peeking Red Card",
		fr: "Coup d’Œil au Carton Rouge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/97/high",
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
			fr: "Votre adversaire dévoile sa main. Vous pouvez demander à votre adversaire de compter les cartes dans sa main, de les mélanger dans son deck, puis de piocher ce même nombre de cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
