import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-73",
	localId: 73,

	// Card informations
	name: {
		en: "Faded Town",
		fr: "Ville Abandonnée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "N'importe quand entre chaque tour, placez 2 marqueurs de dégâts sur chacun des Pokémon Méga-Évolution.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
