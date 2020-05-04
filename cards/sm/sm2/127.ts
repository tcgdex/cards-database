import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-127",
	localId: 127,

	// Card informations
	name: {
		en: "Mallow",
		fr: "Barbara",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/127/high",
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
			fr: "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes, dans n’importe quel ordre, sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
