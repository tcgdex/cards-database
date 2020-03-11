import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Lysandre",
		fr: "Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/90/high",
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
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
