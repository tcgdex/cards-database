import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-102",
	localId: 102,

	// Card informations
	name: {
		en: "Training Center",
		fr: "Centre d'Entraînement",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/102/high",
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
			fr: "Ajoute 30 PV à chacun des Pokémon de Niveau 1 et de Niveau 2 en jeu (les vôtres et ceux de votre adversaire).",
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
