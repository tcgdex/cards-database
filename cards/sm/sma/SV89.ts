import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV89",
	localId: "SV89",

	// Card informations
	name: {
		en: "Mt. Coronet",
		fr: "Mont Couronné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV89/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV89/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV89/high.png",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut placer 2 cartes Énergie Metal de sa pile de défausse dans sa main.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

