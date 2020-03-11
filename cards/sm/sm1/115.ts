import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
