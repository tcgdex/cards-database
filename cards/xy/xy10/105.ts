import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-105",
	localId: 105,

	// Card informations
	name: {
		en: "N",
		fr: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
