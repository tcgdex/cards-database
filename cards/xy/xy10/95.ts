import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-95",
	localId: 95,

	// Card informations
	name: {
		en: "Devolution Spray",
		fr: "Spray Dés-Évoluant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/95/high",
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
			fr: "Faites dés-évoluer l'un de vos Pokémon évolués et mettez sa carte Évolution de plus haut Niveau dans votre main. (Le Pokémon choisi ne peut pas évoluer pendant ce tour.)",
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
