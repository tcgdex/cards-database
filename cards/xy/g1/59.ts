import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Clemont",
		fr: "Lem",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/59/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/59/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 4 cartes Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
