import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-84",
	localId: 84,

	// Card informations
	name: {
		en: "Professor Oak's Hint",
		fr: "Indice du Prof. Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/84/high",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main. Votre tour se termine.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
