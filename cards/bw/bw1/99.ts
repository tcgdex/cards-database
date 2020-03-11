import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "5ban Graphics",



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
