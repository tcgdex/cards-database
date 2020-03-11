import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-235",
	localId: 235,

	// Card informations
	name: {
		en: "Roller Skater",
		fr: "Roller Skateuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/235/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/235/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/235/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/235/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes. Si vous avez défaussé une carte Énergie de cette façon, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
