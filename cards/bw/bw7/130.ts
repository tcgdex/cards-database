import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-130",
	localId: 130,

	// Card informations
	name: {
		en: "Hugh",
		fr: "Matis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/130/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/130/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/130/high.png",
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
			fr: "Chaque joueur pioche ou défausse des cartes jusqu'à avoir 5 cartes dans sa main. (Votre adversaire le fait en premier.)",
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

