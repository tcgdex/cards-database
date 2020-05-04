import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV89",
	localId: "SV89",

	// Card informations
	name: {
		en: "Mt. Coronet",
		fr: "Mont Couronné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut placer 2 cartes Énergie Metal de sa pile de défausse dans sa main.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
