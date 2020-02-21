import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-156",
	localId: 156,

	// Card informations
	name: {
		en: "Viridian Forest",
		fr: "Forêt de Jade",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/156/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/156/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/156/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/156/high",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte de sa main. Dans ce cas, ce joueur cherche une carte Énergie de base dans son deck, la montre, puis l’ajoute à sa main. Ce joueur mélange ensuite son deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
