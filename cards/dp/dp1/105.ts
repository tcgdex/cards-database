import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Double Full Heal",
		fr: "Double guérison totale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/105/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/105/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/105/high",
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
			fr: "Retirez à chacun de vos Pokémon Actifs tous leurs États Spéciaux.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
