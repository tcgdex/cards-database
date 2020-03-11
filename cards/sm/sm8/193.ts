import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-193",
	localId: 193,

	// Card informations
	name: {
		en: "Whitney",
		fr: "Blanche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/193/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/193/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/193/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/193/high",
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
			fr: "Piochez une carte. Ensuite, piochez 2 cartes pour chaque Blanche supplémentaire dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
