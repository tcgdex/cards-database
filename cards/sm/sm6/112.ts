import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-112",
	localId: 112,

	// Card informations
	name: {
		en: "Metal Frying Pan",
		fr: "Poêle Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon Metal auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance), et il n’a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
