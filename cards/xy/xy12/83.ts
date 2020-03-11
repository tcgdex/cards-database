import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-83",
	localId: 83,

	// Card informations
	name: {
		en: "Potion",
		fr: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 30 dégâts à l'un de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
