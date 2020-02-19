import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW29",
	localId: "BW29",

	// Card informations
	name: {
		en: "Victory Cup",
		fr: "Coupe Victoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW29/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW29/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW29/high.png",
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
			fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card

