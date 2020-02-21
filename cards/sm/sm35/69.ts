import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-69",
	localId: 69,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Double Énergie Incolore fournit de l’Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
