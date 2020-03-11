import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV85",
	localId: "SV85",

	// Card informations
	name: {
		en: "Hiker",
		fr: "Montagnard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus du deck de l’un des joueurs et choisissez-en une. Ce joueur mélange les autres cartes avec son deck. Ensuite, placez la carte choisie sur le dessus de ce deck.",
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
