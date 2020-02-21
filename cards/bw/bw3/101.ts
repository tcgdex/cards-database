import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-101",
	localId: 101,

	// Card informations
	name: {
		en: "N",
		fr: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/101/high",
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
			fr: "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
