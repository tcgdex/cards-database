import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/95/high",
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
			fr: "Échangez le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
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
