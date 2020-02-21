import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Muscle Band",
		fr: "Bandeau Muscle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/121/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/121/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
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
