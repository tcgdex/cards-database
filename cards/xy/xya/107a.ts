import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-107a",
	localId: "107a",

	// Card informations
	name: {
		fr: "Professeur Platane",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/107a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/107a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
