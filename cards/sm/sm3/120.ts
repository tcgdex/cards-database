import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-120",
	localId: 120,

	// Card informations
	name: {
		en: "Plumeria",
		fr: "Apocyne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/120/high",
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
			fr: "Défaussez 2 cartes de votre main. Dans ce cas, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
