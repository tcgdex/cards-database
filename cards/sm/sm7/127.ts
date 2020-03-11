import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-127",
	localId: 127,

	// Card informations
	name: {
		en: "Copycat",
		fr: "Copieuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/127/high",
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
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
