import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Lillie",
		fr: "Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/122/high",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu'à ce que vous ayez 8 cartes en main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
