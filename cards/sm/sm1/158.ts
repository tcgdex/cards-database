import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-158",
	localId: 158,

	// Card informations
	name: {
		en: "Nest Ball",
		fr: "Faiblo Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/158/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/158/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/158/high",
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
			fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
