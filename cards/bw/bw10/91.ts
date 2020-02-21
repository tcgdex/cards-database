import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-91",
	localId: 91,

	// Card informations
	name: {
		en: "Plasma Energy",
		fr: "Énergie Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/91/high",
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
			fr: "Cette carte fournit de l'Énergie Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
