import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Bianca",
		fr: "Bianca",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/90/high",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
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
