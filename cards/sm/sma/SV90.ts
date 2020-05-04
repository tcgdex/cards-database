import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV90",
	localId: "SV90",

	// Card informations
	name: {
		en: "Shrine of Punishment",
		fr: "Chapelle des Châtiments",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV90/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV90/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV90/high",
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
			fr: "Entre chaque tour, placez un marqueur de dégâts sur chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire).",
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
