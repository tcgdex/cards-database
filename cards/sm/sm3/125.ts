import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-125",
	localId: 125,

	// Card informations
	name: {
		en: "Tormenting Spray",
		fr: "Spray Tourmenteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/125/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/125/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/125/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire vous montre cette carte. Si c’est une carte Supporter, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
