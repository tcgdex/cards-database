import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-115",
	localId: 115,

	// Card informations
	name: {
		en: "Ultra Space",
		fr: "Ultra-Dimension",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/115/high",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher une carte Ultra-Chimère dans son deck, la montrer, la placer dans sa main, puis mélanger son deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
