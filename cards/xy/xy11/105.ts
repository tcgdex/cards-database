import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-105",
	localId: 105,

	// Card informations
	name: {
		en: "Special Charge",
		fr: "Recharge Spéciale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/105/high",
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
			fr: "Mélangez 2 cartes Énergie spéciale de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
