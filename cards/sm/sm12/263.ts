import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-263",
	localId: 263,

	// Card informations
	name: {
		en: "Giant Hearth",
		fr: "Âtre Géant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/263/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/263/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/263/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/263/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte de sa main. Dans ce cas, ce joueur cherche jusqu’à 2 cartes Énergie Fire dans son deck, les montre, puis les ajoute à sa main. Ce joueur mélange ensuite son deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
