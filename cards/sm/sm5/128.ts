import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-128",
	localId: 128,

	// Card informations
	name: {
		en: "Mars",
		fr: "Mars",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Dans ce cas, défaussez au hasard une carte de la main de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
