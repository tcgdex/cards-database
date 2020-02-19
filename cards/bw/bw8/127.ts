import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-127",
	localId: 127,

	// Card informations
	name: {
		en: "Plasma Energy",
		fr: "Énergie Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/127/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/127/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/127/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
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
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

