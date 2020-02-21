import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-74",
	localId: 74,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Double Énergie Incolore fournit de l'Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
