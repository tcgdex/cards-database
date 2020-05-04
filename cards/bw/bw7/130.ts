import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-130",
	localId: 130,

	// Card informations
	name: {
		en: "Hugh",
		fr: "Matis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/130/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/130/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur pioche ou défausse des cartes jusqu'à avoir 5 cartes dans sa main. (Votre adversaire le fait en premier.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
