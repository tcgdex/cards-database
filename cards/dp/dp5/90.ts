import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-90",
	localId: 90,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/90/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/90/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/90/high",
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
			fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
