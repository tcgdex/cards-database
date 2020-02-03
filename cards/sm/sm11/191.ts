import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-191",
	localId: 191,

	// Card informations
	name: {
		en: "Cherish Ball",
		fr: "Mémoire Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/191/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/191/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/191/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/191/high.png",
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
			fr: "Cherchez un Pokémon-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

