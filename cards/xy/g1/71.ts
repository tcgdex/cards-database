import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Red Card",
		fr: "Carton Rouge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/71/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/71/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/71/high.png",
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
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

