import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-208",
	localId: 208,

	// Card informations
	name: {
		en: "Stadium Nav",
		fr: "Navigateur de Stade",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/208/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/208/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/208/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/208/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

