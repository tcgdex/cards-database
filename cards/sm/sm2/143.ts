import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-143",
	localId: 143,

	// Card informations
	name: {
		fr: "Pectorius",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/sm2/143/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/sm2/143/high",
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
			fr: "Mélangez votre main avec votre deck. Si vous avez utilisé votre attaque GX, piochez 7 cartes. Sinon, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Gardiens Ascendants",
		code: "sm2"
	}
}

export default card
