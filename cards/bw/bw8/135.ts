import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-135",
	localId: 135,

	// Card informations
	name: {
		en: "Colress",
		fr: "Nikolaï",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/135/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/135/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
