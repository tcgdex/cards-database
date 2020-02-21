import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/93/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/93/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez jouer autant de cartes Objet que vous le voulez pendant votre tour (avant votre attaque).",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
