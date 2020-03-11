import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-108",
	localId: 108,

	// Card informations
	name: {
		en: "Winona",
		fr: "Alizée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 3 Pokémon Colorless dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
