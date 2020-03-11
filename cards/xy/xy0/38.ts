import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-38",
	localId: 38,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/38/high",
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
			fr: "Échangez votre Pokémon Actif avec l'un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
