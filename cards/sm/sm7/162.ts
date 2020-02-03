import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-162",
	localId: 162,

	// Card informations
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/162/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/162/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/162/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/162/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez une carte de votre main avec votre deck. Dans ce cas, piochez 3 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

