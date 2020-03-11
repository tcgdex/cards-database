import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-146",
	localId: 146,

	// Card informations
	name: {
		en: "Professor's Letter",
		fr: "Lettre du Professeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/146/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/146/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/146/high",
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
			fr: "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
