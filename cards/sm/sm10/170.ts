import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-170",
	localId: 170,

	// Card informations
	name: {
		en: "Energy Spinner",
		fr: "Spinner d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/170/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/170/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/170/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/170/high.png",
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
			fr: "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie de base au lieu d’une. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

