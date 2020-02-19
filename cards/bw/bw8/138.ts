import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-138",
	localId: 138,

	// Card informations
	name: {
		en: "Random Receiver",
		fr: "Récepteur Aléatoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/138/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/138/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/138/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/138/high.png",
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
			fr: "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Supporter. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

