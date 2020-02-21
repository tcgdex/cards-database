import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-136",
	localId: 136,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/136/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/136/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/136/high",
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
			fr: "Double Énergie Incolore fournit de l’Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
