import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Ryo Ueda",



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







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
