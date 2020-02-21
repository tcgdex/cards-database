import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-119",
	localId: 119,

	// Card informations
	name: {
		en: "Hard Charm",
		fr: "Grigri Protecteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/119/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/119/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/119/high",
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
			fr: "Tous les dégâts infligés au Pokémon auquel cette carte est attachée par une attaque de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
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
