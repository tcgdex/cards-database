import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-89",
	localId: 89,

	// Card informations
	name: {
		en: "Level Ball",
		fr: "Niveau Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/89/high",
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
			fr: "Cherchez dans votre deck un Pokémon avec 90 PV ou moins, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
