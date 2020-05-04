import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-93",
	localId: 93,

	// Card informations
	name: {
		en: "Switch",
		fr: "Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/93/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/93/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
