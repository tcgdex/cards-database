import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-128",
	localId: 128,

	// Card informations
	name: {
		en: "Super Potion",
		fr: "Super Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/128/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/128/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 60 dégâts à l'un de vos Pokémon. Dans ce cas, défaussez une Énergie attachée au Pokémon choisi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
