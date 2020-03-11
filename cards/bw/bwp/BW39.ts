import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW39",
	localId: "BW39",

	// Card informations
	name: {
		en: "Battle City",
		fr: "Ville Combat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW39/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW39/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut lancer une pièce. Si c’est face, ce joueur pioche une carte.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
