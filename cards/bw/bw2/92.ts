import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-92",
	localId: 92,

	// Card informations
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/92/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/92/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à 1 des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
