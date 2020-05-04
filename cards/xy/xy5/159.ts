import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-159",
	localId: 159,

	// Card informations
	name: {
		en: "Professor Birch's Observations",
		fr: "Observations du Professeur Seko",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/159/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/159/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/159/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck et lancez une pièce. Si c'est face, piochez 7 cartes. Si c'est pile, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
