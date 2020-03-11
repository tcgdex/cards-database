import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-107",
	localId: 107,

	// Card informations
	name: {
		en: "Life Dew",
		fr: "Rosée de Vie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/107/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/107/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère 1 carte Récompense de moins.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
