import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-104",
	localId: 104,

	// Card informations
	name: {
		en: "Crasher Wake",
		fr: "Lovis le Teigneux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/104/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/104/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes Énergie Water de votre main. Dans ce cas, cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

