import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-104",
	localId: 104,

	// Card informations
	name: {
		en: "Mega Catcher",
		fr: "Attrape Méga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/104/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/104/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l'un des Pokémon Méga-Évolution du Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
