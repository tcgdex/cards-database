import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-136",
	localId: 136,

	// Card informations
	name: {
		en: "Super Boost Energy ◇",
		fr: "Énergie Super Boost ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/136/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/136/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/136/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
