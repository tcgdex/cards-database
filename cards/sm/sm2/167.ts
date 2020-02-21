import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-167",
	localId: 167,

	// Card informations
	name: {
		en: "Grass Energy",
		fr: "Énergie Grass de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/167/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/167/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/167/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/167/high",
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
