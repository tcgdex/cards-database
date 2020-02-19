import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-142",
	localId: 142,

	// Card informations
	name: {
		en: "Weakness Policy",
		fr: "Vulné-Assurance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/142/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/142/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/142/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/142/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée n'a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

