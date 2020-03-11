import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-212",
	localId: 212,

	// Card informations
	name: {
		en: "Molayne",
		fr: "Molène",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/212/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/212/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/212/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/212/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 cartes Énergie Metal de votre main.\n\nMélangez une carte Dresseur de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
