import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-134",
	localId: 134,

	// Card informations
	name: {
		en: "Skyla",
		fr: "Carolina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/134/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/134/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/134/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/134/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

