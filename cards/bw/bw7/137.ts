import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-137",
	localId: 137,

	// Card informations
	name: {
		en: "Computer Search",
		fr: "Recherche Informatique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/137/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/137/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/137/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

