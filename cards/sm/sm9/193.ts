import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-193",
	localId: 193,

	// Card informations
	name: {
		en: "Electrocharger",
		fr: "Électrochargeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/193/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/193/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/193/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/193/high",
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
			fr: "Lancez 2 pièces. Pour chaque côté face, mélangez une carte Électropuissance de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
