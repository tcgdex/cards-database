import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-127",
	localId: 127,

	// Card informations
	name: {
		en: "Aspertia City Gym",
		fr: "Arène de Pavonnay",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/127/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/127/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoute 20 PV à chacun des Pokémon Colorless en jeu (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
