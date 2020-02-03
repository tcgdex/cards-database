import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-102",
	localId: 102,

	// Card informations
	name: {
		en: "Shadow Triad",
		fr: "Trio des Ombres",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/102/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/102/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez une carte de la Team Plasma de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

