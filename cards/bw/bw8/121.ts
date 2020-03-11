import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-121",
	localId: 121,

	// Card informations
	name: {
		en: "Ether",
		fr: "Huile",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/121/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/121/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Montrez la carte du dessus de votre deck. Si la carte est une carte Énergie de base, attachez-la à 1 de vos Pokémon. Si ce n'est pas une carte Énergie de base, remettez-la sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
