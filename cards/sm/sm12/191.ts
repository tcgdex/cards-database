import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-191",
	localId: 191,

	// Card informations
	name: {
		en: "Erika",
		fr: "Erika",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/191/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/191/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/191/high",
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
			fr: "Chaque joueur peut piocher jusqu’à 3 cartes. Vous piochez en premier.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
