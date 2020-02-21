import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



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
