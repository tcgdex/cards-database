import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-101",
	localId: 101,

	// Card informations
	name: {
		en: "N",
		fr: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/101/high",
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
			fr: "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
