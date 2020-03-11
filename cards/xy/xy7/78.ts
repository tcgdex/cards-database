import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-78",
	localId: 78,

	// Card informations
	name: {
		en: "Lysandre",
		fr: "Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/78/high",
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
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
