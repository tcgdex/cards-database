import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW31",
	localId: "BW31",

	// Card informations
	name: {
		en: "Victory Cup",
		fr: "Coupe Victoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW31/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW31/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW31/high",
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
