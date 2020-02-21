import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-115",
	localId: 115,

	// Card informations
	name: {
		en: "Ghetsis",
		fr: "Ghetis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/115/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/115/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/115/high",
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
			fr: "Votre adversaire montre sa main et mélange toutes les cartes Objet qui s'y trouvent avec son deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes Objet que votre adversaire a mélangées avec son deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
