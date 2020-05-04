import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-60",
	localId: 60,

	// Card informations
	name: {
		en: "Fiery Flint",
		fr: "Silex Ardent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez jusqu’à 4 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
