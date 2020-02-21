import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-197",
	localId: 197,

	// Card informations
	name: {
		en: "Giant Hearth",
		fr: "Âtre Géant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/197/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/197/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/197/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/197/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte de sa main. Dans ce cas, ce joueur cherche jusqu’à 2 cartes Énergie Fire dans son deck, les montre, puis les ajoute à sa main. Ce joueur mélange ensuite son deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
