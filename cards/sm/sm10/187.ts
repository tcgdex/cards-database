import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-187",
	localId: 187,

	// Card informations
	name: {
		en: "Surprise Box",
		fr: "Boîte Surprise",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/187/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/187/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/187/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez une carte de la pile de défausse de votre adversaire dans sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
