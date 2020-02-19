import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-182",
	localId: 182,

	// Card informations
	name: {
		en: "Lusamine ◇",
		fr: "Elsa-Mina ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/182/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/182/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/182/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/182/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
