import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-149",
	localId: 149,

	// Card informations
	name: {
		en: "Skyla",
		fr: "Carolina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/149/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/149/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
