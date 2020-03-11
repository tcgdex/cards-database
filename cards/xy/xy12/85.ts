import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-85",
	localId: 85,

	// Card informations
	name: {
		en: "Revive",
		fr: "Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/85/high",
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
			fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
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
