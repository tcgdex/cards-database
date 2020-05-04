import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-97",
	localId: 97,

	// Card informations
	name: {
		en: "Mountain Ring",
		fr: "Ring en Montagne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/97/high",
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
			fr: "Évitez tous les dégâts infligés à des Pokémon de Banc par des attaques (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
