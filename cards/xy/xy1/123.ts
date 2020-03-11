import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Professor's Letter",
		fr: "Lettre du Professeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/123/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/123/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/123/high",
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
		name: "XY",
		code: "xy1"
	}
}

export default card
