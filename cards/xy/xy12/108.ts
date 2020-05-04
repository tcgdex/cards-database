import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-108",
	localId: 108,

	// Card informations
	name: {
		en: "Misty's Determination",
		fr: "Détermination d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/108/high",
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
			fr: "Défaussez une carte de votre main. Dans ce cas, regardez les 8 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
