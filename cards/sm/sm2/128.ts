import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-128",
	localId: 128,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/128/high",
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
			fr: "Soignez tous les dégâts de l’un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées à ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
