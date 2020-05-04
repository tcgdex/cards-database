import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-89",
	localId: 89,

	// Card informations
	name: {
		en: "Poké Drawer +",
		fr: "Poké Drawer +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/89/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/89/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer 2 Poké Pioche + en même temps. Si vous jouez 1 Poké Pioche +, piochez une carte. Si vous jouez 2 Poké Pioche +, choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
