import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-78",
	localId: 78,

	// Card informations
	name: {
		en: "Lysandre",
		fr: "Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/78/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/78/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

