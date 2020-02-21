import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Pokémon Communication",
		fr: "Communication Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/99/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/99/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Montrez l’un des Pokémon de votre main et placez-le sur le dessus de votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
