import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/g1/RC26/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC26/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



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

