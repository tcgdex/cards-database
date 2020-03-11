import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-210",
	localId: 210,

	// Card informations
	name: {
		en: "Janine",
		fr: "Jeannine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/210/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/210/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/210/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/210/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
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
