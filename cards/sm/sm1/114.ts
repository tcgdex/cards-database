import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Big Malasada",
		fr: "Malasada Maxi",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
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
