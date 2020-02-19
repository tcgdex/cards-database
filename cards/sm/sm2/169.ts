import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-169",
	localId: 169,

	// Card informations
	name: {
		en: "Fighting Energy",
		fr: "Énergie Fighting de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/169/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/169/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/169/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/169/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

