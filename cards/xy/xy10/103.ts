import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-103",
	localId: 103,

	// Card informations
	name: {
		en: "Lass's Special",
		fr: "Spécialité de Fillette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez une carte pour chaque Pokémon de base du Banc de votre adversaire.",
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
