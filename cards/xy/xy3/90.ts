import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Fighting Stadium",
		fr: "Stade des Combats",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/90/high",
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
			fr: "Les attaques de chaque Pokémon Fighting en jeu (les vôtres et ceux de votre adversaire) infligent 20 dégâts supplémentaires aux Pokémon-EX Défenseurs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
