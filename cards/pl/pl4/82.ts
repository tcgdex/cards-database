import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Beginning Door",
		fr: "Porte de départ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/82/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/82/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/82/high",
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
			fr: "Cherchez Arceus dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
