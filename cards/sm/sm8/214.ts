import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-214",
	localId: 214,

	// Card informations
	name: {
		en: "Whitney",
		fr: "Blanche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/214/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/214/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/214/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/214/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez une carte. Ensuite, piochez 2 cartes pour chaque autre Blanche dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
