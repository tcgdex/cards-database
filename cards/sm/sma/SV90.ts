import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Entre chaque tour, placez un marqueur de dégâts sur chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire).",
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
