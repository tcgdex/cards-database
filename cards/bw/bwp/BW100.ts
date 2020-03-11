import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW100",
	localId: "BW100",

	// Card informations
	name: {
		en: "N",
		fr: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW100/high",
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
			fr: "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
