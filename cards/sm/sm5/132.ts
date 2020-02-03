import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-132",
	localId: 132,

	// Card informations
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/132/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/132/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/132/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 2 cartes Supporter de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

