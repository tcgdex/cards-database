import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-78",
	localId: 78,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Total Soin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/78/high",
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
			fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
