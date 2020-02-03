import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Cheren",
		fr: "Tcheren",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/91/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/91/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/91/high.png",
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
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

