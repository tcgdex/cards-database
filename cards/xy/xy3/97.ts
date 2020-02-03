import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy3/97/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/97/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/97/high.png",
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
			fr: "Évitez tous les dégâts infligés à des Pokémon de Banc par des attaques (les vôtres et ceux de votre adversaire).",
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

