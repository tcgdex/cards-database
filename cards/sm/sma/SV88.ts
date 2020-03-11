import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV88",
	localId: "SV88",

	// Card informations
	name: {
		en: "Brooklet Hill",
		fr: "Colline Clapotis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV88/high",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher un Pokémon Water de base ou un Pokémon Fighting de base dans son deck, le placer sur son Banc, puis mélanger son deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
