import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-137",
	localId: 137,

	// Card informations
	name: {
		en: "Computer Search",
		fr: "Recherche Informatique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/137/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/137/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/137/high",
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
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
