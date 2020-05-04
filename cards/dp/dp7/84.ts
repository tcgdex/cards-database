import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-84",
	localId: 84,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Energy Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/84/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/84/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/84/high",
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
			fr: "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
