import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-126",
	localId: 126,

	// Card informations
	name: {
		en: "Hala",
		fr: "Pectorius",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/126/high",
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
			fr: "Mélangez votre main avec votre deck. Si vous avez utilisé votre attaque GX, piochez 7 cartes. Sinon, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
