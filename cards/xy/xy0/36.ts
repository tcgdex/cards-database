import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-36",
	localId: 36,

	// Card informations
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/36/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/36/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
