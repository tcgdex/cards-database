import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy3/102/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/102/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoute 30 PV à chacun des Pokémon de Niveau 1 et de Niveau 2 en jeu (les vôtres et ceux de votre adversaire).",
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

