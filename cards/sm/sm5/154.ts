import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-154",
	localId: 154,

	// Card informations
	name: {
		en: "Mars",
		fr: "Mars",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/154/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/154/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/154/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/154/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Dans ce cas, défaussez au hasard une carte de la main de votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

