import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-121",
	localId: 121,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/121/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/121/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/121/high",
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
			fr: "Soignez tous les dégâts de l'un de vos Pokémon. Ensuite, défaussez toutes les Énergies attachées au Pokémon choisi.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
