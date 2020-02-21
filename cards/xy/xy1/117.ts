import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Fairy Garden",
		fr: "Jardin des Fées",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/117/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/117/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/117/high",
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
			fr: "Chacun des Pokémon auquel de l'Énergie Fairy est attachée (les vôtres et ceux de votre adversaire) n'a pas de Coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
