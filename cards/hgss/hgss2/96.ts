import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-96",
	localId: 96,

	// Card informations
	name: {
		fr: "Lithographie d'Alpha",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/96/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Milky Isobe",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Déchaînement",
		code: "hgss2"
	}
}

export default card
