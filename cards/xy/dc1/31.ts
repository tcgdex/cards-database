import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Team Magma's Great Ball",
		fr: "Super Ball de la Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/31/high",
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
			fr: "Cherchez un Pokémon de base de la Team Magma et une carte Énergie Fighting de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
