import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-131",
	localId: 131,

	// Card informations
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/131/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/131/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 93,
		name: "Yuri Umemura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
