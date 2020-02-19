import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/117/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/117/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 124,
		name: "Kai Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

