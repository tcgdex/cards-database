import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC26",
	localId: "RC26",

	// Card informations
	name: {
		en: "Floral Crown",
		fr: "Couronne Florale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC26/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC26/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		name: {},
		text: {
			fr: "À la fin du tour de votre adversaire, soignez 20 dégâts au Pokémon de base auquel cette carte est attachée.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
