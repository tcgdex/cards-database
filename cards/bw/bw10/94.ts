import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Master Ball",
		fr: "Master Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/94/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/94/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

